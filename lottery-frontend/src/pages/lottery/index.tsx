import {Button, Image, Space, Table} from 'antd';
import {Header} from "../../asset";
import {UserOutlined} from "@ant-design/icons";
import {useEffect, useState} from 'react';
import {studentSocietyDAOContract, myERC20Contract, web3} from "../../utils/contracts";
import './index.css';

const GanacheTestChainId = '0x539' // Ganache默认的ChainId = 0x539 = Hex(1337)
// TODO change according to your configuration
const GanacheTestChainName = 'Ganache Test Chain'
const GanacheTestChainRpcUrl = 'http://127.0.0.1:8545'
var data: any[] = [];

const LotteryPage = () => {

    const [account, setAccount] = useState('')
    const [accountBalance, setAccountBalance] = useState(0)

    useEffect(() => {
        const getData = async () => {
            if (studentSocietyDAOContract) {
                var response = await studentSocietyDAOContract.methods.getData().call()
                data.length = 0
                console.log(response)
                for (let i = 0; i < response.length; i++){
                    if (response[i].due) continue;
                    data.push({
                        index: response[i].index,
                        proposer: response[i].proposer,
                        startTime: response[i].startTime,
                        duration: response[i].duration,
                        voteup: response[i].voteup,
                        votedown: response[i].votedown,
                        due: response[i].due
                    })
                }
                console.log(data)
            } else {
                alert('Contract not exists.')
            }
        }

        getData()
    }, [])

    useEffect(() => {
        // 初始化检查用户是否已经连接钱包
        // 查看window对象里是否存在ethereum（metamask安装后注入的）对象
        const initCheckAccounts = async () => {
            // @ts-ignore
            const {ethereum} = window;
            if (Boolean(ethereum && ethereum.isMetaMask)) {
                // 尝试获取连接的用户账户
                const accounts = await web3.eth.getAccounts()
                if(accounts && accounts.length) {
                    setAccount(accounts[0])
                }
            }
        }

        initCheckAccounts()
    }, [])

    useEffect(() => {
        const getStudentContractInfo = async () => {
            if (studentSocietyDAOContract) {
            } else {
                alert('Contract not exists.')
            }
        }

        getStudentContractInfo()
    }, [])

    useEffect(() => {
        const getAccountInfo = async () => {
            if (myERC20Contract) {
                const ab = await myERC20Contract.methods.balanceOf(account).call()
                setAccountBalance(ab)
            } else {
                alert('Contract not exists.')
            }
        }

        if(account !== '') {
            getAccountInfo()
        }
    }, [account])

    const onClaimTokenAirdrop = async () => {
        if(account === '') {
            alert('You have not connected wallet yet.')
            return
        }

        if (myERC20Contract) {
            try {
                await myERC20Contract.methods.airdrop1().send({
                    from: account
                })
                alert('You have claimed ZJU Token.')
            } catch (error: any) {
                alert(error.message)
            }

        } else {
            alert('Contract not exists.')
        }
    }

    const onNew = async () => {
        if(account === '') {
            alert('You have not connected wallet yet.')
            return
        }

        if (studentSocietyDAOContract && myERC20Contract) {
            try {
                await myERC20Contract.methods.approve(studentSocietyDAOContract.options.address, 3).send({
                    from: account
                })

                await studentSocietyDAOContract.methods.newProposal().send({
                    from: account
                })

                alert('New proposal submitted.')
            } catch (error: any) {
                alert(error.message)
            }
        } else {
            alert('Contract not exists.')
        }
    }

    const onClickConnectWallet = async () => {
        // 查看window对象里是否存在ethereum（metamask安装后注入的）对象
        // @ts-ignore
        const {ethereum} = window;
        if (!Boolean(ethereum && ethereum.isMetaMask)) {
            alert('MetaMask is not installed!');
            return
        }

        try {
            // 如果当前小狐狸不在本地链上，切换Metamask到本地测试链
            if (ethereum.chainId !== GanacheTestChainId) {
                const chain = {
                    chainId: GanacheTestChainId, // Chain-ID
                    chainName: GanacheTestChainName, // Chain-Name
                    rpcUrls: [GanacheTestChainRpcUrl], // RPC-URL
                };

                try {
                    // 尝试切换到本地网络
                    await ethereum.request({method: "wallet_switchEthereumChain", params: [{chainId: chain.chainId}]})
                } catch (switchError: any) {
                    // 如果本地网络没有添加到Metamask中，添加该网络
                    if (switchError.code === 4902) {
                        await ethereum.request({ method: 'wallet_addEthereumChain', params: [chain]
                        });
                    }
                }
            }

            // 小狐狸成功切换网络了，接下来让小狐狸请求用户的授权
            await ethereum.request({method: 'eth_requestAccounts'});
            // 获取小狐狸拿到的授权用户列表
            const accounts = await ethereum.request({method: 'eth_accounts'});
            // 如果用户存在，展示其account，否则显示错误信息
            setAccount(accounts[0] || 'Not able to get accounts');
        } catch (error: any) {
            alert(error.message)
        }
    }

    return (
        <div className='container'>
            <Image
                width='100%'
                height='150px'
                preview={false}
                src={Header}
            />
            <div className='main'>
                <h1>浙大学生社团组织治理网站</h1>
                <Button onClick={onClaimTokenAirdrop}>领取积分空投</Button>
                <div className='account'>
                    {account === '' && <Button onClick={onClickConnectWallet}>连接钱包</Button>}
                    <div>当前用户：{account === '' ? '无用户连接' : account}</div>
                    <div>当前用户拥有积分数量：{account === '' ? 0 : accountBalance}</div>
                </div>
                <div>花费3积分提交提案，2积分进行投票，若提案通过能获得5积分奖励！</div>
                <Button style={{width: '200px'}} onClick={onNew}>新建提案</Button>
                <div className='operation'>
                    <div style={{marginBottom: '20px'}}>提案列表</div>
                    <Table  
                        size='small'
                        columns={[
                            {
                                title: '提案编号',
                                width: 200,
                                key: 'index',
                                dataIndex: 'index',
                                align: 'center'
                            },
                            {
                                title: '开始时间',
                                width: 200,
                                key: 'startTime',
                                dataIndex: 'startTime',
                                align: 'center',
                                sorter: (a, b) => a.startTime - b.startTime,
                                sortDirections: ['descend'],
                            },
                            {
                                title: '赞成票',
                                width: 200,
                                key: 'voteup',
                                dataIndex: 'voteup',
                                align: 'center'
                            },
                            {
                                title: '反对票',
                                width: 200,
                                key: 'votedown',
                                dataIndex: 'votedown',
                                align: 'center'
                            },
                            {
                                title: '操作',
                                width: 500,
                                key: 'action',
                                align: 'center',
                                render: (_, record) => (
                                    <Space size='middle'>
                                        <a onClick={async () => {
                                                try {
                                                    await myERC20Contract.methods.approve(studentSocietyDAOContract.options.address, 2).send({
                                                        from: account
                                                    })
                                                    await studentSocietyDAOContract.methods.vote(record.index, 0).send({
                                                        from: account
                                                    })
                                                    alert('You voted yes for this proposal.')
                                                } catch (error: any) {
                                                    alert(error.message)
                                                }
                                        }}>赞同</a>
                                        <a onClick={async () => {
                                                try {
                                                    await myERC20Contract.methods.approve(studentSocietyDAOContract.options.address, 2).send({
                                                        from: account
                                                    })
                                                    await studentSocietyDAOContract.methods.vote(record.index, 1).send({
                                                        from: account
                                                    })
                                                    alert('You voted no for this proposal.')
                                                } catch (error: any) {
                                                    alert(error.message)
                                                }
                                        }}>反对</a>
                                        <a onClick={async () => {
                                                try {
                                                    await studentSocietyDAOContract.methods.voteEnd(record.index).send({
                                                        from: account
                                                    })
                                                    alert('You ended this proposal.')
                                                } catch (error: any) {
                                                    alert(error.message)
                                                }
                                        }}>结束</a>
                                    </Space>
                                ),
                            },
                        ]}
                        dataSource={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default LotteryPage