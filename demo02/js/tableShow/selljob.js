define(['jquery'], function ($) {
    function TableContent() {
        this.sellJob = $(
            '<div class="sell-job">' +
            '<span style="color: red;">' +
            '1.点击左侧标题可以实现全选。2.点击空白表格外或者右侧关闭按钮，即可关闭表格。 ' +
            '</span>' +
            '<span class="offbtn">' +
            'X' +
            '</span>' +
            '<table class="table table-hover table-bordered">' +
            '<tbody>' +
            '<tr>' +
            '<td><span>销售|客服|市场</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A058">销售业务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A057">销售管理</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A056">销售行政/商务</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A000">客服/售前/售后技术支持</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A001">市场</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A002">公关/媒介</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A003">广告/会展</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>财务|人力资源|行政</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A004">财务/审计/税务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A005">人力资源</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A006">行政/后勤/文秘</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>项目|质量|高级管理</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A007">项目管理/项目协调</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A008">质量管理/安全防护</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A009">高级管理</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>IT|互联网|通信</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A010">软件/互联网开发/系统集成</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A011">硬件开发</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A012">互联网产品/运营管理</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A013">IT质量管理/测试/配置管理</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A014">IT运维/技术支持</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A015">IT管理/项目协调</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A016">电信/通信技术开发及应用</label>' +
            '</td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>房产|建筑|物业管理</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A017">房地产开发/经纪/中介</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A018">土木/建筑/装修/市政工程</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A019">物业管理</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>金融</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A020">银行</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A021">证券/期货/投资管理/服务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A022">保险</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A023">信托/担保/拍卖/典当</label>' +
            '</td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>采购|贸易|交通|物流</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A024">采购/贸易</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A025">交通运输服务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A026">物流/仓储</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>生产|制造</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A027">生产管理/运营</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A028">电子/电器/半导体/仪器仪表</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A029">汽车制造</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A030">汽车销售与服务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A031">机械设计/制造/维修</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A032">服装/纺织/皮革设计/生产</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A033">技工/操作工</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A034">生物/制药/医疗器械</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A035">化工</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>传媒|印刷|艺术|设计</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A036">影视/媒体/出版/印刷</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A037">艺术/设计</label>' +
            '</td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>咨询|法律|教育|翻译</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A038">咨询/顾问/调研/数据分析</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A039">教育/培训</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A040">律师/法务/合规</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A041">翻译（口译与笔译）</label>' +
            '</td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>服务业</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A042">商超/酒店/娱乐管理/服务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A043">旅游/度假/出入境服务</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A044">烹饪/料理/食品研发</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A045">保健/美容/美发/健身</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A046">医院/医疗/护理</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A047">社区/居民/家政服务</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>能源|环保|农业|科研</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A048">能源/矿产/地质勘查</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A049">环境科学/环保</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A050">农/林/牧/渔业</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A051">公务员/事业单位/科研机构</label>' +
            '</td>' +
            '<td></td>' +
            '<td></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><span>兼职|实习|社工|其他</span></td>' +
            '<td>' +
            '<table>' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A052">实习生/培训生/储备干部</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A053">志愿者/社会工作者</label>' +
            '</td>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A054">兼职/临时</label>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="positionNature" value="A055">其他</label>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>'
        );
        this.sellIndustry = $(
            '<div class="sell-industry">'+
            '<span style="color: red;">' +
            '1.点击左侧标题可以实现全选。2.点击空白表格外或者右侧关闭按钮，即可关闭表格。 ' +
            '</span>' +
            '<span class="offbtn">' +
            'X' +
            '</span>' +
            '<table class="table table-hover table-bordered">'+
            '<tbody>'+
            '<tr>'+
            '<td><span>IT|通信|电子|互联网</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B001">互联网/电子商务</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B002">计算机软件</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B003">IT服务(系统/数据/维护)</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B004">电子技术/半导体/集成电路</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B005">计算机硬件</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B006">通信/电信/网络设备</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B007">通信/电信运营、增值服务</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B008">网络游戏</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>金融业</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B009">基金/证券/期货/投资</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B010">保险</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B011">银行</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B012">信托/担保/拍卖/典当</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>房地产|建筑业</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B013">房地产/建筑/建材/工程</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B014">家居/室内设计/装饰装潢</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B015">物业管理/商业中心</label>'+
            '</td>'+
            '<td></td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>商业服务</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B016">专业服务/咨询(财会/法律/人力资源等)</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B017">广告/会展/公关</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B018">中介服务</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B019">检验/检测/认证</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B020">外包服务</label>'+
            '</td>'+
            '<td></td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>贸易|批发|零售|租赁业</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B021">快速消费品（食品/饮料/烟酒/日化）</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B022">耐用消费品（服饰/纺织/皮革/家具/家电）</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B023">贸易/进出口</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B024">零售/批发</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B025">租赁服务</label>'+
            '</td>'+
            '<td></td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>文体教育|工艺美术</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B026">教育/培训/院校</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B027">礼品/玩具/工艺美术/收藏品/奢侈品</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>生产|加工|制造</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B028">汽车/摩托车</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B029">大型设备/机电设备/重工业</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B030">加工制造（原料加工/模具）</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B031">仪器仪表及工业自动化</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B032">印刷/包装/造纸</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B033">办公用品及设备</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B034">医药/生物工程</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B035">医疗设备/器械</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B036">航空/航天研究与制造</label>'+
            '</td>'+
            '<td></td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>交通|运输|物流|仓储</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B037">交通/运输</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B038">物流/仓储</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>服务业</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B039">医疗/护理/美容/保健/卫生服务</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B040">酒店/餐饮</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B041">旅游/度假</label>'+
            '</td>'+
            '<td></td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>文化|传媒|娱乐|体育</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B042">媒体/出版/影视/文化传播</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B043">娱乐/体育/休闲</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>能源|矿产|环保</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B044">能源/矿产/采掘/冶炼</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B045">石油/石化/化工</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B046">电气/电力/水利</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B047">环保</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>政府|非盈利机构</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B048">政府/公共事业/非盈利机构</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B049">学术/科研</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><span>农|林|牧|渔|其他</span></td>'+
            '<td>'+
            '<table>'+
            '<tbody>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B050">农/林/牧/渔</label>'+
            '</td>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B051">跨领域经营</label>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>'+
            '<label>'+
            '<input type="checkbox" name="companyTrade" value="B052">其他</label>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</div>'
        );

        this.sellMajor = $(
            '<div class="sell-major">'+
            '<span style="color: red;">' +
            '1.点击左侧标题可以实现全选。2.点击空白表格外或者右侧关闭按钮，即可关闭表格。 ' +
            '</span>' +
            '<span class="offbtn">' +
            'X' +
            '</span>' +
            '<table class ="table table-hover table-bordered">'+
            '<tbody>'+
            '<tr>'+
            '<td class="major-td1"><span>经济学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C001">应用经济学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C002">区域经济学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C003">金融学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C004">数量经济学</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>法学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C005">法学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C006">宪法学与行政法学</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C007">政治学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C008">国际政治</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C009">马克思主义理论</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C010">马克思主义基本原理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C011">思想政治教育</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>教育学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C012">心理学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C013">应用心理学</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>文学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C014">外国语言文学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C015">英语语言文学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C016">外国语言学及应用语言学</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C017">新闻传播学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C018">传播学</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>理学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C019">数学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C020">基础数学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C021">计算数学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C022">概率论与数理统计</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C023">应用数学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C024">运筹学与控制论</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C025">物理学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C026">理论物理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C027">粒子物理与原子核物理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C028">原子物理与分子物理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C029">等离子体物理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C030">凝聚态物理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C031">声学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C032">光学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C033">无线电物理</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C034">生物学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C035">神经生物学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C036">生物化学与分子生物学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C037">生物物理学</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C038">统计学</label></div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>工学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C039">机械工程</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C040">机械制造及其自动化</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C041">机械电子工程</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C042">机械设计及理论</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C043">车辆工程</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent"><label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C044">光学工程</label></div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C045">仪器科学与技术</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C046">精密仪器及机械</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C047">测试计量技术及仪器</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C048">材料科学与工程</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C049">材料物理与化学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C050">材料学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C051">材料加工工程</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C052">电气工程</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C053">电力电子与电力传动</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C054">电子科学与技术</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C055">物理电子学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C056">电路与系统</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C057">微电子学与固体电子学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C058">电磁场与微波技术</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C059">电子信息材料与元器件</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C060">信息与通信工程</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C061">通信与信息系统</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C062">信号与信息处理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C063">信息获取与探测技术</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C064">遥感信息科学与技术</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>工学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C065">控制科学与工程</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C066">控制理论与控制工程</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C067">检测技术与自动化装置</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C068">系统工程</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C069">模式识别与智能系统</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C070">导航、制导与控制</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C071">计算机科学与技术</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C072">计算机系统结构</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C073">计算机软件与理论</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C074">计算机应用技术</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C075">信息安全</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C076">测绘科学与技术</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C077">地图制图学与地理信息工程</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C078">化学工程与技术</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C079">应用化学</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C080">生物医学工程</label></div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C081">软件工程</label></div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>军事学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C082">军队指挥学</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C083">密码学</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td class="major-td1"><span>管理学</span></td>'+
            '<td>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C084">管理科学与工程</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C085">信息管理与电子商务、新兴技术管理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C086">金融工程</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C087">工商管理</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C088">会计学</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C089">企业管理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C090">旅游管理</label>'+
            '<label>'+
            '<input type="checkbox" name="major" value="C091">技术经济及管理</label>'+
            '</div>'+
            '</div>'+
            '<div class="major-parent">'+
            '<label>'+
            '<input type="checkbox" name="major" class="checkbox-all" value="C092">公共管理</label>'+
            '<div class="major-child">'+
            '<label>'+
            '<input type="checkbox" name="major" value="C093">行政管理</label>'+
            '</div>'+
            '</div>'+
            '</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</div>'
        );

        this.ch_province =$(
            '<div class="ch_province">' +
            '<span style="color: red;">' +
            '1.点击左侧标题可以实现全选。2.点击空白表格外或者右侧关闭按钮，即可关闭表格。 ' +
            '</span>' +
            '<span class="offbtn">' +
            'X' +
            '</span>' +
            '<table class="table table-hover table-bordered">'+
            '<tbody>'+
            '<tr>'+
            '<td>' +
            '<label>' +
            '<input type="checkbox" name="ch_province" value="E001" >北京市</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E002" >天津市</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E003" >上海市</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E004" >重庆市</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E005" >河北省</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E006" >山西省</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E007" >辽宁省</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E008" >吉林省</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E009" >黑龙江省</label>' +
            '</td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E010" >江苏省</label>' +
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E011" >浙江省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E012" >安徽省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E013" >福建省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E014" >江西省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E015" >山东省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E016" >河南省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E017" >湖北省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E018" >湖南省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E019" >广东省</label></td>'+
            '<td>' +
            '<label><input type="checkbox" name="ch_province" value="E020" >海南省</label></td>'+
            '</tr>'+
            '<tr>'+
            '<td><label><input type="checkbox" name="ch_province" value="E021" >四川省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E022" >贵州省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E023" >云南省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E024" >陕西省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E025" >甘肃省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E026" >青海省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E027" >台湾省</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E028" >内蒙古自治区</label></td>'+
            '</tr>'+
            '<tr>'+
            '<td><label><input type="checkbox" name="ch_province" value="E029" >广西壮族自治区</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E030" >西藏自治区</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E031" >宁夏回族自治区</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E032" >新疆维吾尔自治区</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E033" >香港特别行政区</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E034" >澳门特别行政区</label></td>'+
            '<td><label><input type="checkbox" name="ch_province" value="E035" >国外</label></td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '</div>'


        );
    }

    return {
        TableContent: TableContent
    }
});