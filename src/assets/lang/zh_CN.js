module.exports = {
  message: {
    userlogin: '用户登录',
    steemAccoutPlaceHolder: '请输入Steem用户名',
    login: '登录',
    loging: '登录中...',
    delegatemine: '代理挖矿',
    spbalance: 'SP余额',
    yourspdelegate: 'SP代理量',
    cancel:'取消',
    confirm:'确认',

    sptotaldelegate: '代理总量',
    totalpnut: 'PNUT总产量',
    apy: '年化收益率',
    pnutprofits: 'PNUT收益',
    withdraw: '收获',
    balance: '余额',
    approveContract:"授权合约",
    max:'最大',
    confirmconvert: '确认兑换',
    servicecharge: '手续费',
    delegatecharge: '代理手续费',
    atleastcharge: '最低收取',
    convertrate: '兑换率',
    logout: '注销',
    confirmdelegate: '确认代理',
    delegatedsp: '已代理SP数量',
    steembalance: 'STEEM余额',
    sbdbalance: 'SBD余额',
    tronbalance: '波场余额',
    tsteembalance: 'TSTEEM余额',
    tsbdbalance: 'TSBD余额',
    pnutbalance: 'PNUT余额',
    input: '输入',
    tips:"帮助信息",

    setting: '设置',
    admin:'管理员',
    whitePaper: '白皮书',
    nps: 'Nutbox提案系统',
    userBook: '用户手册',
    questions: '常见问题',
    contract: '合约地址',
    swap: '交易对',
    tools: '常用工具',
    contact: '联系我们',
    docs: '文档',
    discord: 'Discord',
    about: '关于',
    blog: '博客',
    changeSteemNode: 'steem节点(可选)',
    contractAddr: '合约地址',

    language: '语言',
    zh: '中文',
    en: 'English',
    kr: '한국어',
    my: 'Malaysia',
    tr: 'Türkçe',
    es: 'Español',
    jp: '日本語'
  },
  wallet: {
    wallet: '钱包',
    swap: '跨链转账',
    connectSteem:"链接Steem钱包",
    connectTron:"链接波场钱包",
    swapSubTitle:"及时、安全的将资产转移到波场网络",
    install:"立即安装",
  },
  stake: {
    stake: '质押挖矿',
    creaseDelegation: "增加代理",
    increaseDelegation: "减少代理",
    getSp: "获取 SP",
    get:'获取',
  },
  farm: {
    farm: '流动性挖矿',
    stake:"储蓄",
    unStake: "减少储蓄",
    tsp: {
      tspMine: 'TSP挖矿',
      yourTspAmount: '储蓄的TSP数量',
      balanceOfTsp: 'TSP 余额',
      tspMinlingFee: '挖矿手续费',
      totalDepositTsp: '储蓄总量',
      confirmDeposit: '确认储蓄',
      addTspDeposit: '增加储蓄',
      minusTspDeposit: '减少储蓄',
      notEnoughFee: '手续费不足',
    },
    tsteem: {
      tsteemMine: 'TSTEEM挖矿',
      yourTsteemAmount: '储蓄的TSTEEM数量',
      balanceOfTsteem: 'TSTEEM 余额',
      tsteemMinlingFee: '挖矿手续费',
      totalDepositTsteem: '储蓄总量',
      confirmDeposit: '确认储蓄',
      addTsteemDeposit: '增加储蓄',
      minusTsteemDeposit: '减少储蓄',
      notEnoughFee: '手续费不足',
    },
    tspLp: {
      tspLPBalance: 'S-TSP-TRX 余额',
      yourTSPLPAmount: '储蓄的S-TSP-TRX',
      totalDepositTspLP:"储蓄总量",
      totalTSP: 'TSP总量',
    },
    pnutLp: {
      pnutLPBalance: 'S-PNUT-TRX 余额',
      yourPNUTLPAmount: '储蓄的S-PNUT-TRX',
      totalDepositPnutLP:'储蓄总量'
    }
  },
  liquidStaking: {
    liquidStaking: '质押资产流动',
    title: "TSP 质押与赎回",
    tsp: {
      tspIsCirculatingSP: 'TSP为SP的等价物，TSP可享受SP同等的质押奖励，且TSP可交易',
      tsptosteemintro: '转换的STEEM将在33-40天内陆续返还'
    }
  },
  vote:{
    upvote:"点赞",
    vote:"点赞帖子",
    title:"支付PNUT,获得nutbox.mine点赞",
    link:"帖子链接",
    payPnut:"支付PNUT",
    linkPlaceholder:"请填写需要点赞的帖子链接",
    pnutPlaceholder:"请填写支付金额",
    transfer:"转账",
    voteRate:"PNUT - 10% 点赞",
  },
  nps: {
    nps: '提案改善',
    pass: '已通过',
    pending: '待审核',
    unpass: '未通过',
    rolling: '正在投票'
  },
  error: {
    error: '错误',
    depositFail: '储蓄失败',
    withdrawFail: '提现失败',
    changeDepsitFail: '变更储蓄失败',
    delegateFail: '代理失败',
    changeDelegateFail: '变更代理失败',
    approveFail: '授权失败',
    accountChanged: 'steem与tron账号不匹配，请确认钱包账号是否切换',
    delegateerror: '代理错误！',
    tryrefreshpage: '错误，请尝试刷新页面！',
    steemloginerr: 'Steem账户登录错误!',
    needkeychainandtronlink: '需要同时安装Steem Keychain钱包和TronLink钱包！',
    needkeychain: '请安装steem-keychain钱包',
    needtronlink: '请安装tronlink钱包',
    insufficientEnerge: '能量不足',
    transferFail: '转账失败',
    unlockKeychain: '请解锁Steem Keychain',
    unlockWallet: '请解锁波场钱包',
    steemLoginFail: 'Steem登录失败',
    illegalTronAddress: '无效的波场地址',
    inputError: '输入值无效',
    inputOverflow: '输入超过最大值',
    inputOutOfRange: "请输入{lowerPnutAmount}-{upperPnutAmount}的值",
    inputLinkIllegal:"请输入正确的链接",
    transferFail:"转账失败",
    notEnoughFee: '手续费不足',
    insufficentPnut:"PNUT余额不足",
    hasVoted: "Nutbox已经点赞了您的帖子。"
  }

}
