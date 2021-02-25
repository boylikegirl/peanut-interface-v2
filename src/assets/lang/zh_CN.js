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

    miningpooldata: '矿池数据',
    sptotaldelegate: 'SP代理总量',
    totalpnut: 'PNUT总产量',
    apy: '年化收益率',
    pnutprofits: 'PNUT收益',
    withdraw: '收割',
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

    setting: '设置',
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
    changeSteemNode: '切换steem节点',

    contractAddr: '合约地址',
    attention: '注意:',
    attensionInfo: '假币骗局！请不要以代币的名字查询交易代币，应以代币的合约地址为准！',

    language: '语言',
    zh: '中文',
    en: 'English',
    kr: '한국어',
    '': ''
  },
  wallet: {
    wallet: '钱包',
    swap: '跨链转账',
    connectSteem:"链接Steem钱包",
    connectTron:"链接波场钱包"
  },
  stake: {
    stake: '质押'
  },
  farm: {
    farm: '流动性挖矿',
    tsp: {
      tspMine: 'TSP挖矿',
      yourTspAmount: '储蓄的TSP数量',
      balanceOfTsp: 'TSP 余额',
      tspMinlingFee: '挖矿手续费',
      totalDepositTsp: 'TSP储蓄总量',
      confirmDeposit: '确认储蓄',
      tspIsCirculatingSP: '备注：TSP是流通的SP',
      addTspDeposit: '增加储蓄',
      minusTspDeposit: '减少储蓄',
      cancelTspDeposit: '取消储蓄',
      confirmAddTspDeposit: '确认增加储蓄',
      confirmMinusTspDeposit: '确认减少储蓄',
      confirmCancelTspDeposit: '确认取消储蓄',
      notEnoughFee: '手续费不足',
      approveNutbox: '授权Nutbox'
    },
    tspLp: {
      tspLPBalance: 'S-TSP-TRX 余额',
      yourTSPLPAmount: '储蓄的S-TSP-TRX',
      totalDepositTspLP:"S-TSP-TRX储蓄总量",
      totalTSP: 'TSP总量',
    },
    pnutLp: {
      pnutLPBalance: 'S-PNUT-TRX 余额',
      yourPNUTLPAmount: '储蓄的S-PNUT-TRX',
      totalDepositPnutLP:'S-PNUT-TRX储蓄总量'
    }
  },
  liquidStaking: {
    liquidStaking: '质押资产流动',
    tsp: {
      tsptosteemintro: '转换的STEEM将在33-40天内陆续返还'
    }
  },
  vote:{
    vote:"点赞帖子",
    title:"支付PNUT,获得nutbox.mine点赞",
    link:"帖子链接",
    payPnut:"支付PNUT",
    linkPlaceholder:"请填写需要点赞的帖子链接",
    pnutPlaceholder:"请填写支付金额",
    transfer:"转账",
    voteRate:"点赞比例：{lowerPnutAmount}PNUT对应10%点赞",
  },
  nps: {
    nps: '提案改善',
    pass: '已通过',
    pending: '待审核'
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
    needkeychainandtronlink: '需要同时安装keychain钱包和tronlink钱包！',
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
    inputOutOfRange: "请输入{lowerPnutAmount}-{uperPnutAmount}的值",
    inputLinkIllegal:"请输入正确的链接",
    transferFail:"转账失败",
    notEnoughFee: '手续费不足'
  }

}
