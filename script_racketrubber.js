var magazine_brands = ["乒乓类杂志"];
var magazine_types = {};
magazine_types["乒乓类杂志"]=["乒乓","乒乓世界"];
var shirt_brands = ["阿迪达斯adidas"];
var shirt_types = {};

shirt_types["阿迪达斯adidas"]=["T12","POLO"];

var racket_brands = ["红双喜DHS","阿迪达斯adidas","银河Yinhe","骄猛XIOM","蝴蝶Butterfly","斯帝卡Stiga","亚萨卡Yasaka","多尼克Donic","尼塔库Nittaku","达克Darker","可酷达酷KOKUTAKU",
                     "挺拔Tibhar","大和TSP","AVX","阿瓦拉Avalox","优拉Joola","岸度Andro","豹斯Bosi","百希达Prisidah","克拉克","郁金香",
                     "拍里奥Palio","LKT","大维Dawei","三维Sanwei","锐科特","阿塔克Attak","狮牌Lion","克拉克Crack","729","世奥得SWORD",
                     "莱斯特Niceshot","马式球拍","美津农Mizuno","爱博Epoch","金亚Jinya", "可牛Cornilleau","双鱼DoubleFish","国球GuoQiu"];
//没有具体型号的品牌
var racket_brands_notype = ["可酷达酷KOKUTAKU","AVX","阿瓦拉Avalox","豹斯Bosi","百希达Prisidah","克拉克","郁金香","LKT","大维Dawei",
                            "三维Sanwei","锐科特","阿塔克Attak","狮牌Lion","克拉克Crack","莱斯特Niceshot","马式球拍","美津农Mizuno","爱博Epoch"];

var racket_types = {};

for(i = 0; i < racket_brands_notype.length;i++ ) {
	racket_types[racket_brands_notype[i]] = [racket_brands_notype[i]];
}

racket_types["银河Yinhe"] = ["Pro-5W","邱贻可鸡翅木软碳 Qiu Yike Wenge","邱贻可红花梨木软碳 Qiu Yike Palisander","邱贻可玫瑰木软碳 Qiu Yike Rosewood","邱贻可玫瑰木软碳 Qiu Yike Rosewood",
                           "ZLF 金星.3 Venus.03","ZLC 金星.4 Venus.04","真空烧 VB E3 Vacuum Bake E3","真空烧 VB E1 Vacuum Bake E1","Y-4","Y-3","Y-2","Y-1",
                           "弧圈王（横板）/横打王（直板） W-6","软碳王 W-5","轻木王 W-4","桧碳王 W-3","立碳王 W-2","立木王 W-1","金星.16 Venus.16","金星.15 Venus.15",
                           "金星.14 Venus.14","金星.13 Venus.13","金星.12 Venus.12","金星.11 Venus.11","金星.2 Venus.2","金星.1 Venus.1","天王星.3 Uranus.3",
                           "天王星.2 Uranus.2","天王星.1 Uranus.1","Y-14","T-11","T-10","T-8","T-7","T-6","T-5","T-4","T-3","T-2","T-1","古韵 Rosewood Nano 70",
                           "古韵 Rosewood Nano 50","MC-4","MC-3","MC-2","MC-1","科技碳 EC-14","科技碳 EC-13","科技碳 EC-12","科技碳 EC-11","墨韵 Ebony Nano 70",
                           "墨韵 Ebony Nano 50","地球.5 Earth.5","地球.4 Earth.4","地球.3 Earth.3","地球.2 Earth.2","地球.1 Earth.1"];


racket_types["骄猛XIOM"] = ["桧煞HINOKI","攻击煞OFFENSIVE","终极煞EXTREME","三碳桧皇SPEED","STRADIVARIUS时代帝王","RSMPLATINUM刀锋战士","佐罗SOLO","HAYABUSA猛隼Z+",
                          "HAYABUSA猛隼ZXi","SAGA杰龙碳皇","ZETROQUAD杰拓碳皇","IGNITO易加图","OPUS欧宝","REQUIEM锐酷","HAYABUSA猛隼Z","HAYABUSA猛隼Zi","ARIALITE爱锐燃情",
                          "CONTROL刚柔碳皇","RSMPLATINUM","RSMGOLD","V1威一","爱锐ARIA","BOLERO暴龙","Strato斯加图"];
racket_types["蝴蝶Butterfly"] = ["张继科super ZLC","金泽洙单桧","柳承敏日式底板G-MAX","CYPRESS-MAX","波尔ZLC","柳承敏ZLC-S","水谷隼ZLC","INNERSHIELD-ZLF","ISHLION","波尔ZLF",
                               "光微子","张怡宁ZLC","INNERFORCE-ZLC","蒋澎龙顶级单桧","刘诗雯LIUSHIWEN","格林卡碳素","柳承敏-MAX","INNERFORCE-ZLF","CAPRICORN",
                               "HOLYCROWN","INNERFORCE-ALC","柳承敏T5000-S","INNERFORCE-ULC","福原爱SPECIAL","波尔T5000","新张继科","波尔ALC","INNERFORCE-T5000",
                               "IOLITENEO","KOCHOOH","KAZANCARBONX","RETRIEVER","施拉格碳素","BollSpirit","梅兹","新松下浩二削球底板","BAZELART","普里莫拉茨碳",
                               "普里莫拉茨纯木","UMEMURA梅村礼","KUMPURUX","TWIRL","DILLFER","科贝尔SK7","BRISKERLIGHT","蝴蝶王VISCARIA","大力神COFFERLAIT"];
racket_types["岸度Andro"] = ["猎人K Treiber K","猎人H Treiber H","猎人G Treiber G","创 Tronum Carbotox off","创 Tronum Aratox off+",
                           "炭烧 off+ Temper Tech off+","炭烧 off- Temper Tech off-","Super Core Cell off+","Super Core Cell Carbon off",
                           "Super Core Cell off","Super Core Cell off-","Super Core Cell all+","Super Core Cell all","超级动能 ZLC Kinetic Supreme off- Zylon",
                           "超级动能 炭素 Kinetic Supreme off Carbon","超级动能 off Kinetic Supreme off","超级动能 off- Kinetic Supreme off-","超级动能 all+ Kinetic Supreme all+",
                           "超级动能 玻纤 Kinetic Supreme all","Kinetic CF Light off+","Kinetic CF Light off","Kinetic CF Light all+","V12 Kinetic off","V8 Kinetic off",
                           "V6 off","a500 Kinetic all+","a400 all+","a200 Kinetic all+","a100 Kinetic off","Fibercomp Def","黑立碳王 Blax off","CS7 Velocity","CS7 Tour"];

racket_types["可牛"] = ["王者 HT 碳 进攻+ Hinotec off+","王者 HT 进攻 Hinotec off","王者 HT 进攻- Hinotec off-","王者 HT 全面+ Hinotec All+","盖亭 GP Gatien Pure off+",
                                "盖亭 GO Gatien Origin off-","盖亭 GG Gatien Glory off","盖亭 GC Gatien Conquest off","盖亭 GA Gatien Absolum off+","羽量进攻+ Aero off+",
                                "羽量进攻 Aero off","羽量进攻- Aero off-","羽量全面 Aero all"];
racket_types["达克Darker"] = ["7P-2A.3C","Speed 100","Speed 600s","700芳碳 700 Aryl-Carbon","600芳碳 600 Aryl-Carbon","Speed 90","Speed 70","Speed 15","Speed 10",
                            "7P-2A点碳 7P-2A.Point Carbon","7P-2A碳素 7P-2A.Carbon","7P-2A芳碳 7P-2A.Aryl-Carbon","7P-2A.7t","7P-2A.05","5P-2A碳素 5P-2A.Carbon"];
racket_types["红双喜DHS"] = ["狂飚龙5 Hurricane Long 5","狂飚龙3 Hurricane Long 3","狂飚龙2 Hurricane Long 2","狂飚宁 Hurricane Ning","狂飚霞 Hurricane Xia","狂飚皓2 Hurricane Hao 2","狂飚皓 Hurricane Hao","天罡 DM SP60 Dipper DM SP60",
                         "N655 N656 W968","天极506+","天极506","天极7 CP2 TG 7 CP2","天罡 DM SP300 Dipper DM SP300","天罡 DM SP10 Dipper DM SP10","天罡 DM S80 Dipper DM S80","天罡 DM S70 Dipper DM S70",
                          "天罡 DM CP200 Dipper DM CP200","天罡 DM CP90 Dipper DM CP90","狂飚H-QZ Hurricane H-QZ","狂飚H-TP Hurricane H-TP","狂飚H-LN Hurricane H-LN",
                          "劲极9 POWER.G 9","狂飚H-LG Hurricane H-LG","劲极7 POWER.G 7","劲极8 POWER.G 8","劲极3 POWER.G 3","劲极2 POWER.G 2","天罡 Di-16 Dipper Di-16",
                          "天罡 Di-18 Dipper Di-18","天罡 Di-15 Dipper Di-15","天罡 Di-13 Dipper Di-13","天罡 Di-11 Dipper Di-11","天罡 Di-03 Dipper Di-03",
                          "天罡 Di-02 Dipper Di-02","天极7 SP2 纯木 TG 7.SP2",
                          "天极7 SP 纯木 TG 7.SP","天极7 P2 纯木 TG 7.P2","天极7 P 纯木 TG 7.P","天极7 CP 纯木 TG 7.CP","天罡DM-SP2000 玻碳 Dipper SP2000 Gla-Carbon",
                          "天罡DM-SP1000 玻碳 Dipper SP1000 Gla-Carbon","天罡DM-SP02 碳核 Dipper SP02 Inner Carbon","天罡DM-CP20 碳素 Dipper CP20 Carbon",
                          "天罡DM-CP01 碳界 Dipper CP01 Mono Carbon",
                         "狂飚王3 Hurricane King 3","狂飚王2 Hurricane King 2","狂飚王 Hurricane King","狂飚龙 Hurricane Long","狂飚皓3 Hurricane Hao 3",
                          "狂飚H-WL Hurricane H-WL","狂飚H-WH Hurricane H-WH","狂飚H-ML Hurricane H-ML"];
racket_types["多尼克Donic"] = ["红木5层 Blood Wood 5","燃烧 阿拉米多斯 Burn Aratox","燃烧 阿拉米多斯 RS Burn Aratox RS","燃烧 碳素多斯 Burn Carbotox","都特-7 Persson Dotec off",
                            "都特-1 Persson Dotec Carbokev","都特-2 Waldner Dotec Carbon","都特-8 Waldner Dotec AR","瓦碳加强 Waldner Senso Ultra Carbon V1",
                            "北欧精选-22 Waldner Exclusive AR","瓦碳 Waldner Carbon V1","龙-黑魔 Waldner Black Devil CB","龙-黑色力量 Waldner Black Power",
                            "北欧精选-21 Persson Exclusive off","佩尔森专用 Persson Carbotec","奥恰洛夫 Ovtcharov Senso V1","李平 Liping Kitex","幻彩1 Epox Topspeed",
                            "幻彩2 Epox PowerAllround","幻彩3 Epox Offensiv","幻彩4 Epox Control","Crisan Titanium","燃烧 Burn off-","燃烧 Burn off",
                            "燃烧 Burn all+","鲍姆专用 Baum Sawtec off","鲍姆7层 Baum Carrera Senso V1","Alligator Combi"];
racket_types["双鱼DoubleFish"] = ["烧碳 CQ 4","烧碳 CQ 3","中国玘2","中国玘","烧碳 CQ 2","烧碳 CQ 1","赤刃","冰刃"];
racket_types["国球GuoQiu"] = ["W-08","大力士 W-07","桧木王 W-06","W-05","W-04","儿童专用 W-02","W-01","灰水晶 L-04","红水晶 L-03","黑水晶 L-02","碳王 C-09","C-08","C-06",
                            "C-05","C-03","C-02","C-01","A-204","A-03","芳基王 A-02","板王 A-01"];
racket_types["优拉Joola"] = ["莱茵河 Rhine","多瑙河 Danube","K3+","K6","K7","陈卫星 CWX","飞翼激情中速 Wing Passion Medium","飞翼激情快速 Wing Passion Fast",
                           "飞翼激情极速 Wing Passion Extreme","Viva","獠牙Tusk","罗斯科夫铂金纪念版 Rosskopf Platinum","罗斯攻击 Rosskopf Force","罗斯激情 Rosskopf Emotion",
                           "R1","MC1 MultiComp 1","酷 Kool","K5","火焰 Flame Fast","鹰击长空 Eagle Fast","锐豹 Leopard","利爪 Claw","极速炸弹 Bomb Extreme","烈焰 Blaze","百伦特 Balant"];
racket_types["尼塔库Nittaku"] = ["Bizelox","Clout","石川佳纯 Kasumi Basic","Resist","松鼠桶 Ristal","王辉 Tiluna","小提琴J Violin J","Airuline 8.8","EERU NE单层桧木日式直拍","Russelfor 9.2",
                              "无字大鸟 Ludeack Power","无字玻璃鸟 Ludeack Fleet","黑玻鸟羽 Barwell Fleet","大提琴 Vioncello","小提琴 Violin","男高音 Tenor","七层桧 Septear","Rutis",
                              "Runlox 5","吕林 Rorin","李晓霞 Lialox","新小提琴碳素木吉他","真空烧HINOBLAZE桧×炎","大鸟 Ludeack Power","玻璃鸟 Ludeack Fleet FLnc","小鸟 Ludeack NE-","小鸟 Ludeack","Lialox","金暻娥 Kim Kyung Ah","黑鸟羽 Barwell","红鸟羽 Adelie",
                              "木吉它 Acoustic"];
racket_types["拍里奥Palio"] = ["奥特菲博 OF-005","奥特菲博 OF-004","奥特菲博 OF-003","奥特菲博 OF-002","奥特菲博 OF-001","薄轻弹 LT-005薄轻弹 LT-004","薄轻弹 LT-003","薄轻弹 LT-002",
                            "薄轻弹 LT-001","桧木 CS-008","桧木 CS-007","桧木 CS-005","桧木 CS-004","桧木 CS-003","桧木 CS-002","桧木 CS-001","钛金王","削球1号","横打一号","殳",
                            "矛","戟","弓","8603","醉龙","神龙","狂龙","藏龙","霸王","越王","荆轲","V2","V1","TT","TS3","TS1","TOM","TNT-1","新TNT","TN","TEN","TCT","TC-7",
                            "TC-2","T3","S4","R57","P10","LGL","LGB","KC2","KC1	","KA","CAT","C100","C91","C88","C87","C86","C33","C17","C-8","C-3","C-2","C-1","B31",
                            "B21","B11","B8","B7","B6","B5","A6","A5","A4","A3","A2","A1","ACN"];
racket_types["斯帝卡Stiga"] = ["Carbonado 145","Carbonado 190","Allround Classic Carbon","INFINITY VPS V 钻石5 樊振东用","INTENSITY NCT超轻极强纯木 许昕用","EMERALD VPS V 钻石升级翡翠5","Sense 7.6","Rosewood XO","Offensive Classic Carbon","黑檀5 Ebenholz NCT V 郭跃","玫瑰5 Rosewood NCT V 许昕",
                            "枫木7 Maplewood NCT VII","能量型 Energy Wood WRB","进攻管王 Tube Offensive WRB","轻管王 Tube Light WRB","防守管王 Tube Defensive WRB",
                            "碳素管王 Tube Carbo WRB","铝管王 Tube Aluminium WRB","全能管王 Tube Allround WRB","钛5.4 WRB Titanium 5.4 WRB","钛5.4 Titanium 5.4",
                            "玫瑰7 Rosewood NCT VII","水晶一代 Optimum Sync","水晶7层 Optimum Seven","水晶加强 Optimum Sync Plus","水晶碳素 Optimum Carbo",
                            "纳米OC Offensive Wood NCT","OC 加大型 Offensive Oversize WRB","OC CR WRB Offensive Classic CR WRB","OC CR Offensive Classic CR",
                            "OC WRB Offensive Classic WRB","OC Offensive Classic","枫木5 Maplewood NCT V","胡桃5 Intensity NCT","胡桃碳素 Intensity Carbo NCT",
                            "纳米碳王9.8 Hybird Wood NCT","黑檀7 Ebenholz NCT VII","CC7 NCT Crystal Carbo 7 NCT","CC5 NCT Crystal Carbo 5 NCT","CL WRB Clipper Wood WRB",
                            "CL CR WRB Clipper Wood CR WRB","CL CR Clipper Wood CR","CL Clipper Wood","CL加大型 Clipper Oversize WRB","CL CC Clipper CC",
                            "红黑碳王 7.6 加大型 Carbo Oversize WRB","红黑碳王 7.6 WRB Carbo 7.6 WRB","红黑碳王 7.6 CR WRB Carbo 7.6 CR WRB","红黑碳王 7.6 CR Carbo 7.6 CR",
                            "红黑碳王 5.4 WRB Carbo 5.4 WRB","红黑碳王 5.4 Carbo 5.4","AE Allround Evolution","AC CR WRB Allround Classic CR WRB"];
racket_types["世奥得SWORD"] = ["紫悦2","碧悦","横滨悦2","经典50 金色经典","经典50 银色经典","经典50 绿色经典","经典50 蓝色经典","经典50 红色经典","玉剑","赤剑","铜剑","青剑","墨剑",
                            "练剑","芯碳-V8 Carbon V-8","芯碳-V6 Carbon V-6","晨曦三","晨曦二","晨曦一","309削球专用","赛变 Subdue","怪拍王","碳素怪拍王","七木","五木",
                            "龙之桧 Dragon Wood","阿波罗3","阿波罗2","阿波罗1","新效率 New Efficiency","新能量 New Energy","横打一号 横打－NO.1","霹雳4008","霹雳4000","霹雳桧剑",
                            "大众四碳-II Public Carbon-Picked 4-II","碳D Carbon D","碳C Carbon C","碳B Carbon B","碳A Carbon A","蓝色骑士","蓝色王子	","蓝魔","蓝爵","未来-6008",
                            "未来-7000","超能C 08","超杰C 08","超能C","超杰C","剑中王01","横滨悦","蓝悦","紫悦","C30","W80","RG 90","W70","V70","Nano","聚龙灵 Ghost","银聚龙 银Julong",
                            "金聚龙 金Julong","RGT超杰王 RG Terminator","黑莓 Black Berry"];
racket_types["大和TSP"] = ["Yamato-FX","Yamato-FX","Versal直板","Versal横版","Award Offensive直板","Award Offensive横版","Offensive Reflex-System直","Offensive Reflex-System横",
                         "Red Hawk直","Red Hawk横","Extra Top直","Extra Top横","Byelun直","Byelun横","Winning","White Eagle","TS-7","Swing Robo","Swat","Superblade Neo",
                         "Shandy","RF-Large(S)","Power Player","Newspin","Limban","Kotony","Japiel","Hino-Carbon Power","Hino-Carbon Speed","Gaia","Euro Spin","Chinese-5S",
                         "Choose","Carbon F-1","Campione","Break-11","Besty","Award Kids Off","Award Kids All","Astron Red","Arsnova","Allround Reflex-System"];

racket_types["亚萨卡Yasaka"] = ["GOIABAO5","玫瑰5","YEO7 Power Extra Offensive 7 Power","X1","YO40 Offensive 40","马琳加强碳3D YCA-MAX3D Max Carbon 3D","马琳软碳 YESC Ma Lin Soft Carbon",
                             "马琳加强碳 YCA-MAX Ma Lin Max Carbon","YEO7 Ma Lin Extra Offensive 7","YEO Ma Lin Extra Offensive","马琳碳 YCA Ma Lin Carbon","YG Galaxya",
                             "YES Ma Lin Extra Special","YE7 Extra 7","YE3D Extra 3D","YE Extra","YDM 17 DynaMax","YDM 17 DynaMix","YB Balsa"];

racket_types["阿迪达斯adidas"]= ["hypertouch","radix express","radix ultimate","radix impress","strike wood7","strike wood5","strike carbon","Challenge挑战 Light","C100","Fibertec Classic","Fibertec Extreme","C500",
                             "Fibertec Power","avenger 5","avenger 7","avenger CP","V1.3","V1.1","V1.5","Fibertec extreme 红碳-锋","Fibertec Power 蓝碳-锏","Fibertec classic 金纤-锐",
                             "C300","Challenge挑战 Force"];
racket_types["挺拔Tibhar"]= ["炫碳皇 Black Carbon","蜘蛛网萨碳云碳stratus samsonov","Triple Carbon锤霸三碳皇","探索TEXO C7","T7F","神T7动力7"," Samsonov Carbon萨姆碳皇","萨姆索诺夫用SAMSONOV FORCE PRO","FREITAS CARBON弗雷塔斯芳碳"];
racket_types["729"]= ["X2","Z1","Z2","A2","A3","C1","C2","C3","V1","V3","V5","V6","F1","F2","F3","F5","L1","L3","L5","W1"];                             
racket_types["金亚Jinya"]= ["竹丝系列","竹纤维系列","竹炭系列"];                             
       
       
       
                             

var rubber_brands = ["红双喜DHS","阿迪达斯adidas","银河","蝴蝶BUTTERFLY","斯帝卡STIGA","双鱼DoubleFish","挺拔TIBHAR","亚萨卡YASAK","世奥得SWORD","多尼克DONIC","大和TSP","尼塔库NITTAKU","骄猛XIOM","岸度ANDRO","达克DK","可酷达酷KOKUTAKU","樱花","郁金香TUPLE",
                     "优拉JOOLA","729","拍里奥PALIO","爱博EPOCH","锐科特REACTOR","大维DAWEI","LKT","巨力克JUIC","赛维卡SAVIGA",
                     "环球999","国球GUOQIU","克拉克Crack","莱斯特NICESHOT","美津农MIZUNO","海夫HAIFU","三维SANWEI", 
                     "炸弹BOMB", "可牛Cornilleau"];

var rubber_brands_notype = ["可酷达酷KOKUTAKU","樱花","郁金香TUPLE",
                     "巨力克JUIC","赛维卡SAVIGA","爱博EPOCH","锐科特REACTOR","长兴999",
                     "环球999","旋弧王","许绍发","克拉克Crack","莱斯特NICESHOT","美津农MIZUNO","海夫HAIFU","三维SANWEI"];
var rubber_types = {};

for(i = 0; i < rubber_brands_notype.length;i++ ) {
	rubber_types[rubber_brands_notype[i]] = [rubber_brands_notype[i]];
}
rubber_types["阿迪达斯adidas"] = ["Tenzone Ultra","Tenzone SF","Tenzone","Secret 神秘","Blaze Speed 内能生胶","P3 无机内能反胶","P5 无机内能反胶","P7 无机内能反胶","Blaze Spin","R6 无机内能反胶",
                           "R4 无机内能反胶","Syntec Fast"];
rubber_types["岸度ANDRO"] = ["黑煞Pips 加强 Hexer Pips Force","旋动 Shifter","旋动Power Shifter Powersponge","黑煞HD Hexer HD","锐煞 Rasant","Roxon 500 Pro","Roxon 450",
                           "革命之火09 Revo Fire","等离子470 Plasma 470","等离子430 Plasma 430","黑煞Pips+ Hexer Pips+","黑煞Pips Hexer Pips","黑煞D Hexer Duro","黑煞+ Hexer+",
                           "黑煞 Hexer","毒河豚 Blowfish+","气泡鱼 Blowfish"];
rubber_types["挺拔TIBHAR"] = ["Sinus Alpha 一闪超音速阿尔法声音","Sinus Sound 一闪超音速声音","EVOLUTION MX-P变革能量","RAPID雷劈 大D","EL-P MX-P","MX-S","Aurus Sound龙吟 怪兽软型","Aurus Soft龙啸龙吟","GRIP-S","1Q XD 5Q","GRASS D.TECS草内能长胶","NIMBUS VIP 灵气王","NIMBUS SOUND 灵气声音","RAPID雷劈","RAPID SOFT雷劈","NIMBUS SOFT 灵气软型","EVOLUTION FX-P","MYTHIK 神话","大C大D ","GENIUS 天才","GENIUS+ OPTIMUM 天才+","GENIUS SOUND 天才声音","GENIUS+ OPTIMUM SOUND 天才声音+","5Q聚能5Q+","Dragon 金龙专业版","1Q XD加硬型74-005"];

rubber_types["炸弹BOMB"] = ["UFO","天煞 Tensa","魔法专业版 Mopha Professional","魔法 Mopha"];
rubber_types["蝴蝶BUTTERFLY"] = ["Sriver","Sriver EL","Sriver FX","Tenergy 64 FX","Tenergy 80","Tenergy 25","Tenergy 64","Tenergy 25 FX","Tenergy 05 FX","Tenergy 05","Sriver G3 FX",
                               "Sriver G3","Spin Art","Roundell Soft","Roundell Hard","Roundell","Flarestorm Ⅱ","Flarestorm","Feint Long Ⅱ","Feint Long Ⅱ超薄",
                               "Bryce Speed FX","Bryce Speed"];
rubber_types["可牛Cornilleau"] = ["先锋 Pilot Advance","Target Force","Target Sound","Target Ultim","猎杀 Pulse Racer","骑士 Pulse Rider"];
rubber_types["达克DK"] = ["银D","蓝V Vlon-S","银V Vlon-S","Provine"];
rubber_types["大维DAWEI"] = ["388D-1","388D", "388C-1","388A-4","388A-2","388A 旋风","2008","绝涩 Inspirit"];
rubber_types["红双喜DHS"] = ["金弓3","天弓","天弓3","天弓5","C8","651","谜印 2 Memo 2","云雾3","天极3","天极3-60","天极2",
                          "闪灵","龙影","普通狂飚3","普通狂飚3-50","省队狂飚3","狂飚2","国套狂飚3","普通狂飚8","NEO 天极3","NEO 天极2 ",
                          "NEO 狂飚3 Hurricane 3","NEO 狂飚2 Hurricane 2"];
rubber_types["多尼克DONIC"] = ["蓝火 Blue Fire M1","阿酷达 Acuda S1 Turbo","Desto F1","Desto F3","Desto F2","Desto F1 HS","阿酷达 Acuda S3","阿酷达 Acuda S2","阿酷达 Acuda S1",
                            "Coppa X3","Coppa X2","Coppa X1 Gold 金装","Coppa X1 Turbo Platin 铂金","金装索尼斯 Sonex JP Gold","康柏速度 Coppa Speed","铂金JO Coppa JO Platin",
                            "JO 金装 Coppa JO Gold","魔鬼 Baxster F1-A","巴拉库达 Baracuda","66-GS"];
rubber_types["双鱼DoubleFish"] = ["猎影232","展翅3 旋风王 Volant 3","飓风820A","飓风1615","A One"];
rubber_types["729"] = ["奔腾2","极限 Top Point","启源 729 Origin","极光","天翼 Sky-Wing","焦点3-Snipe Focus 3","焦点2 Focus 2","焦点1 Focus 1","锋魂 729 Faster","超越 729 Higher","729-08 ES",
                       "729-08","729-5","新729-2","经典729-2","精品天籁 Transcend","天籁729","729-40s","精品729 Cream","郗恩庭国套 XET","传奇 Legend","837","802-40",
                       "802","755","563"];
rubber_types["国球GUOQIU"] = ["功夫 Gong Fu","原子弹 AB A-Bomb","未来战士 FF Future Fighter","超音速 SS Supersonic(RITC海绵)",
                            "超音速 SS Supersonic(日本海绵)","七十二变 MG 进攻型长胶粒","七十二变 MG 进攻型长胶套","七十二变 MG 飘怪晃型长胶粒","七十二变 MG 飘怪晃型长胶套"];
rubber_types["优拉JOOLA"] = ["MAXXX-P","雷神 Rhyzm","桑巴+ Samba plus","敏锐冲锋号 X-Plode Sensitive","快车冲锋号 X-Plode","探戈超级 Tango Ultra","探戈顶级 Tango Extrem","春雷 Spring Thunder",
                           "章鱼 Octopus","曼波 Mambo H","快车光速号 Express Ultra","快车2号 Express Two","能量 Energy","战鼓 Drum","快车1号 Express One","能量 XEnergy X-tra"];
rubber_types["LKT"] = ["金星 弧圈型 Golden Star Loop","金星 快攻型 Golden Star Fast Attack","怪客 Stranger","超能量 Pro XP","龙卷风 Pro XT","声霸 Rapid Sound","激流 Torrent",
                       "超能量金龙 Pro XP Gold Dragon","红钻石 Red Diamond","黑金刚 Black Power"];
rubber_types["尼塔库NITTAKU"] = ["Fastarc G-1","Flyatt Hard","Flyatt Soft","Screw One","莫里史特 RS 硬 Moristo RS Hard","莫里史特 2000 Moristo 2000","十字军 GS 硬 Narucross GS Hard",
                              "十字军 GS 软 Narucross GS Soft","十字军 GS 超软 ","诺迪亚 Nodias","火凤凰 软 Renanos Bright Soft","软老虎 Renanos Soft","Retora",
                              "Express","Hammond FA Speed","莫里史特 LP Moristo LP","莫里史特 LP One Moristo LP One","蓝龙 Renanos Hold","哈蒙特 FA Hammond FA",
                              "哈蒙特 阿尔法 Hammond Pro α","哈蒙特 Hammond Pro β","硬老虎 Renanos Hard","火凤凰 Renanos Bright Hard","雷福曼 Reforma","十字军EX Narucross EX Hard",
                              "莫里斯特 SP Moristo SP","莫里斯特 2000 NX ","Micro μ","哈蒙特 X Hammond X","哈蒙特 紫尼 Hammond","Galze","Fastarc S-1"];
rubber_types["拍里奥PALIO"] = ["AK47全能型","HK1997","雷 Thor'S","电 Blit'Z","Maximo","Macro Era","Macro Pro","Macro","WP1013","CK531A","CJ8000 Biotech 长效近中台弧圈快攻型",
                            "CJ8000 长效两面弧圈型","CJ8000 近中台快攻弧圈型","CJ8000 两面弧圈型","CJ8000 全面型","CJ8000 轻快型","AK47","霸王 Conqueror","霸道 Hadou",
                            "阿美高 Amigo","醉龙 Drunken Dragon","神龙 Emperor Dragon","狂龙 Wildish Dragon","藏龙 Hidden Dragon","威龙 Power Dragon","飞龙 Flying Dragon"];
rubber_types["斯帝卡STIGA"] = ["Calibra LT","Power LT","水晶 MP Optimum MP","尼斯超粘 Neos Tacky","尼斯-协同科技 Neos SynergyTech","尼斯超轻-协同科技 Neos Sound SynergyTech",
                            "尼斯 Neos","曼多 MP Mendo MP","曼多 Mendo","玛格纳TS II Magna TS II","全能王 Magna","超轻一诺王-协同科技 Innova Ultra Light SynergyTec...",
                            "超轻一诺王 Innova Ultra Light","超级一诺王 Innova Premium","一诺王 Innova","碳素 Carbo","Calibra LT Sound","Boost TX","Boost TS","Boost TP",
                            "Boost TC","纳米超轻 Almana Sound"];
rubber_types["世奥得SWORD"] = ["Nano","圣光 Paladin","美则 Maze","2000F横打专用","2000F反手专用","无机Hero","无机King","突破 Break","塞拉 Scylla","塞拉 Scylla 单长胶 OX","2000F内能",
                            "2000F木质提高","2000F木质标准","2000F木质普及","2000F纤维提高","2000F纤维标准"];
rubber_types["大和TSP"] = ["Agrit","Triple Spin Offensive","X's F-1-21","Tyranno","Triple Speed Offensive","Triple Power Offensive","Triple 21","Super Spinpips Chop",
                         "Super Spinpips 21","Super Spinpips","Speed Spectol","Spectol 21","Spectol","Rise","Real","Grandy","Curl P-H","Curl P-3-α-R",
                         "Curl P-1-R-OX 单长胶","Curl P-1-R","Brio","Actor"];
rubber_types["骄猛XIOM"] = ["魔煞2 MUSA2","魔煞3 MUSA3","踏舞 Tau","唯佳中国 Vega China","希格玛 Sigma 1","希格玛 Sigma 2","捷踏 Zeta","咤威 Zava","雅纳斯 Yanus","唯佳弧圈 银V","唯佳力量 黑V","唯佳速度 红V",
                          "一怒王50 True Innovation 50","一怒王45 True Innovation 45","欧米茄4 Omega 4","欧米茄3 Omega 3","欧米茄2 Omega 2","欧米茄1 Omega 1","怪龙腾闸刀 Guillotines"];
rubber_types["亚萨卡YASAK"] = ["威力7 Rakza 7","威力9 Rakza 9","Mark V HPS","Rakza 7 Soft","X Tend HS","Mark V XS","Mark V HPS Soft","Mark V"];
rubber_types["银河"] = ["北斗 Big Dipper","月球专业版 Moon Pro","土星专业版 Saturn Pro","阿波罗2 Apollo 2","月球 Moon","木星 Jupiter","阿波罗 Apollo 1","土星 Saturn","火星 Mars","地球 Earth","金星2 Venus 2","水星2 Mercuty 2","太阳 Sun"];

var object_kind = [racket_brands,rubber_brands,magazine_brands,shirt_brands];
