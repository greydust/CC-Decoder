﻿function PassiveData(typeName, detailDescription, parameterDescription, flagDescription, iParameterDescription) {
	this.typeName = typeName;
	this.detailDescription = detailDescription;
	this.parameterDescription = parameterDescription;
    this.flagDescription = flagDescription;
    this.iParameterDescription = iParameterDescription;
}

PassiveDatas = {
    0: new PassiveData("NONE",
        "Type NONE: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1: new PassiveData("LowHP",
        "當血量≦{0:2p}%時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%、暴擊傷害增加{5:2p}%",
        ["血量比例上限", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    2: new PassiveData("FullHP",
        "當血量全滿時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%",
        ["未使用", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    3: new PassiveData("BossBattle",
        "Boss Wave時，攻擊乘{1:3f}、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{6:2p}%，並每{5:1f}秒治療最大血量的{4:2p}%",
        ["未使用", "攻擊倍率", "移動速度倍率", "受傷倍率", "治療比例", "治療間隔", "暴擊機率增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    4: new PassiveData("WaveUp",
        "過Wave時，{14}使自身的攻擊增加{1:2p}%、移動速度增加{2:2p}%、減傷增加{3:2p}%",
        ["未知參數", "攻擊增加", "移動速度增加", "減傷增加", "觸發血量下限", "觸發血量上限", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    5: new PassiveData("TargetCID",
        "當目標編號為{0}時，攻擊乘{1:3f}倍、受傷乘{3:3f}倍",
        ["目標編號", "攻擊倍率", "未使用", "受傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    6: new PassiveData("TargetCategory",
        "當目標是{0}時，攻擊乘{1:3f}倍、受傷乘{3:3f}倍",
        ["種族編號", "攻擊倍率", "未使用", "受傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    7: new PassiveData("TargetStage",
        "{14}攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、血量乘{4:3f}倍",
        ["戰場旗標", "攻擊倍率", "移動速度倍率", "受傷倍率", "血量倍率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    8: new PassiveData("Always",
        "攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、血量乘{4:3f}倍",
        ["未使用", "攻擊倍率", "移動速度倍率", "受傷倍率", "血量倍率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    9: new PassiveData("Bullet",
        "遠程攻擊時，攻擊乘{2:3f}倍，貫通後攻擊乘{0:3f}倍{3}",
        ["貫通後倍率", "新子彈飛行速度", "攻擊倍率", "觸發機率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    10: new PassiveData("CriticalFlag",
        "暴擊時有{0:2p}%的機率使該攻擊帶{14}{1}",
        ["暴擊時觸發機率", "擊退力增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    11: new PassiveData("ExtraFlag",
        "普攻時有{0:2p}%的機率使該攻擊帶{14}{1}",
        ["觸發機率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    12: new PassiveData("ExtraGuard",
        "抗{10}",
        ["未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["免疫旗標", "未使用"],
        ["未使用", "未使用"]),
    13: new PassiveData("Fire",
        "’抗火",
        ["未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    14: new PassiveData("Ice",
        "抗冰",
        ["未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    15: new PassiveData("Resist",
        "受到魔法攻擊時傷害乘{0:3f}倍，物理攻擊時傷害乘{1:3f}倍",
        ["魔法受傷倍率", "物理受傷倍率", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    16: new PassiveData("WaveHeal",
        "過Wave時，治療自身最大血量的{0:2p}%",
        ["治療比例", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    17: new PassiveData("Heal",
        "每{1:3f}秒治療最大血量的{0:2p}%",
        ["治療比例", "治療間隔", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    18: new PassiveData("Backup",
        "後備時，使所有{14}的攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%",
        ["所屬", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["武器旗標", "未使用"],
        ["職業旗標", "未使用"]),
    19: new PassiveData("StrengthHealer",
        "使治療量乘{1:3f}倍、治療速度乘{2:3f}倍{10}{14}",
        ["治療範圍增加", "治療量倍率", "治療速度倍率", "治療範圍樣式", "治療範圍", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
    20: new PassiveData("StrengthJob",
        "使戰場上所有{14}的角色的攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍",
        ["未使用", "攻擊倍率", "移動速度倍率", "受傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    21: new PassiveData("StealHP",
        "未暴擊普攻吸血{0:2p}%、暴擊普攻吸血{1:2p}%，必殺吸血{2:2p}%",
        ["未暴擊吸血率", "暴擊吸血率", "必殺吸血率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    22: new PassiveData("KillUp",
        "殺死敵人時提高{1:2p}%攻擊、{3:2p}%減傷、{2:2p}%移動速度，並治療自身最大血量{4:2p}%的傷害",
        ["未使用", "攻擊增加", "移動速度增加", "減傷增加", "回復百分比", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    23: new PassiveData("Counter",
        "當受到近戰{3}普攻時，有{0:2p}%的機率減傷{2:2p}%並反擊{1}倍{15}傷害{14}，最多每{4}秒一次",
        ["觸發機率", "傷害倍率", "受傷倍率", "是否可反擊暴擊", "冷卻時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    24: new PassiveData("Revenge",
        "隊友死亡時，治療自身最大血量{2:2p}%的血量，並增加自身{1:2p}%攻擊、{3:2p}%防禦{10}，持續{0}秒{14}",
        ["持續時間", "攻擊增加", "治療比例", "防禦增加", "隊友攻擊增加", "隊友治療比例", "隊友防禦增加", "未知參數", "未知參數", "未知參數"],
        ["免疫旗標", "未使用"],
        ["未使用", "未使用"]),
    25: new PassiveData("HighGuard",
        "格擋減傷再增加{0:2p}%（原始為60%）",
        ["格擋減傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    26: new PassiveData("ManaGet",
        "戰鬥開始時{14}{15}",
        ["法力珠數", "符合職業條件額外法力珠數", "符合地形條件額外法力珠數", "地形旗標", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    27: new PassiveData("ManaLot",
        "使轉珠時兩珠機率增加{0:2p}%、三珠機率增加{1:2p}%（只取最高者）{14}",
        ["兩珠機率增加", "三珠機率增加", "戰場兩珠機率增加", "戰場三珠機率增加", "戰場1", "戰場2", "戰場3", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    28: new PassiveData("ManaHunter",
        "用未暴擊普攻、暴擊普攻、必殺殺死敵人時，分別有{0:2p}%、{1:2p}%、{2:2p}%的機率得到法力珠{14}",
        ["未暴擊機率", "暴擊機率", "技能機率", "戰場未暴擊額外機率", "戰場暴擊額外機率", "戰場技能額外機率", "戰場旗標", "戰場旗標", "戰場旗標", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    29: new PassiveData("ExtraChainRate",
        "必殺威力增加{0:2p}%",
        ["必殺增傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    30: new PassiveData("WaveHealAll",
        "過Wave時，治療全體最大血量的{0:2p}%",
        ["治療比例", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    31: new PassiveData("WaveHealOne",
        "過Wave時，治療血量比例最低者最大血量的{0:2p}%",
        ["治療比例", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    32: new PassiveData("FlagKiller",
        "當目標受到{14}狀態影響時，攻擊乘{1:3f}倍、受傷乘{3:3f}倍",
        ["未使用", "攻擊倍率", "未使用", "受傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    33: new PassiveData("HighCritical",
        "暴擊傷害增加{0:2p}%{10}",
        ["暴擊傷害增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    34: new PassiveData("FlagUp",
        "當自己受到{14}狀態影響時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍{15}、暴擊機率增加{6:2p}%，必殺法力珠消耗減少{7:d}顆",
        ["未使用", "攻擊倍率", "移動速度倍率", "受傷倍率", "治療比例", "治療間隔", "暴擊機率增加", "必殺法力珠消耗減少", "未使用", "未使用"],
        ["Debuff旗標", "未使用"],
        ["未使用", "未使用"]),
    35: new PassiveData("PartyUp",
        "當持有同樣覺醒的角色在場時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍",
        ["未知參數", "攻擊倍率", "移動速度倍率", "受傷倍率", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    36: new PassiveData("HighHP",
        "當血量≧{0:2p}%時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%、暴擊傷害增加{5:2p}%",
        ["血量比例下限", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    37: new PassiveData("InFighter",
        "遠程攻擊乘{1:3f}倍。近戰時{2}{0}{3}",
        ["近戰攻擊修正", "遠程攻擊倍率", "近戰攻速修正", "觸發機率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    38: new PassiveData("ArtsFlag",
        "使用必殺時有{0:2p}%的機率使該必殺帶{14}{1}",
        ["必殺觸發機率", "擊退力增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    39: new PassiveData("LowStatus",
        "使受到{10}狀態的效果減少{0:2p}%（毒／衰弱時影響傷害，其他影響時間）",
        ["時間倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["Debuff種類", "未使用"],
        ["未使用", "未使用"]),
    40: new PassiveData("LowPush",
        "被擊退時，擊退力乘{0:3f}倍",
        ["擊退力乘數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    41: new PassiveData("ResistWeakRate",
        "Type ResistWeakRate: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    42: new PassiveData("Invisible",
        "使自身隱形，隱形時每{4}秒得到一層增益，使{0}增加{1:2p}%攻擊、{2:2p}%移動速度、{3:2p}%減傷，該層增益持續{5}秒（每層分別計算持續時間）{6}",
        ["目標排序", "攻擊增加", "移動速度增加", "減傷減少", "增益間隔", "持續時間", "攻擊是否現形", "未使用", "未使用", "未使用"],
        ["增益旗標", "未使用"],
        ["未使用", "未使用"]),
    43: new PassiveData("TargetEneset",
        "當戰場編號為{0:d}時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、血量乘{4:3f}倍",
        ["戰場編號", "攻擊倍率", "移動速度倍率", "受傷倍率", "血量倍率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    44: new PassiveData("TargetRaidID",
        "當打魔神編號{0:d}時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、血量乘{4:3f}倍",
        ["魔神編號", "攻擊倍率", "移動速度倍率", "受傷倍率", "血量倍率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    45: new PassiveData("ArtsHealFlag",
        "使用必殺時有{0:2p}%的機率{14}{1}",
        ["必殺觸發機率", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
    46: new PassiveData("Concentration",
        "使轉珠速度降為{0:3f}倍（只取效果最強者）",
        ["轉珠速度倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    47: new PassiveData("UnionJob",
        "當戰場上存在{14}職且總數≧{0:d}時，使所有{14}職的角色攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍",
        ["需求數量", "攻擊倍率", "移動速度倍率", "受傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    48: new PassiveData("ReflectionBullet",
        "受到遠程普攻時，傷害減低{4:2p}%，並反彈一顆傷害為{0}倍原攻擊力的子彈{2}，移動速度每秒{1}單位{3}。最多每{5}秒一次",
        ["物理反彈傷害倍率", "物理反彈子彈速度", "魔法反彈傷害倍率", "魔法反彈子彈速度", "減傷", "冷卻時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    49: new PassiveData("Division",
        "Type Division: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    50: new PassiveData("Mutate",
        "Type Mutate: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "攻擊增加", "移動速度增加", "防禦增加", "血量增加", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    51: new PassiveData("CriticalRate",
        "暴擊機率增加{0:2p}%{14}",
        ["暴擊機率增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    52: new PassiveData("FastAttack",
        "讓攻擊間隔成為{0}秒一次，並增加{1:2p}%攻擊力",
        ["新攻擊間隔", "攻擊增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    53: new PassiveData("SpCostdown",
        "使必殺少消耗{0}珠（最低1珠）",
        ["降低必殺消耗", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    54: new PassiveData("SuperArmor",
        "Type SuperArmor: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    55: new PassiveData("BugManaAttack",
        "依法力珠數，0珠時普攻攻擊乘{0:3f}倍、必殺攻擊乘{2:3f}倍，至8珠時普攻攻擊乘{1:3f}倍、必殺攻擊乘{3:3f}倍",
        ["0珠時普攻攻擊倍率", "8珠時普攻攻擊倍率", "0珠時必殺攻擊倍率", "8珠時必殺攻擊倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    56: new PassiveData("Position",
        "當處於{14}時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍，並增加{7:2p}%暴擊機率、{8:2p}%暴擊傷害{15}",
        ["距離起算方向", "攻擊倍率", "移動速度倍率", "受傷倍率", "治療比例", "治療間隔", "距離參數", "暴擊機率增加", "暴擊傷害增加", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    57: new PassiveData("HitNormal",
        "普攻{0}下後，普攻攻擊乘{1:3f}倍、必殺攻擊乘{2:3f}倍、移動速度乘{3:3f}倍、受傷乘{4:3f}倍{10}，持續{5:3f}秒，效果內再普攻可刷新效果",
        ["攻擊次數", "普攻攻擊倍率", "必殺攻擊倍率", "移動速度倍率", "受傷倍率", "持續時間", "附加種類", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    58: new PassiveData("Guts",
        "當受到{0}點以上的致命傷害時，有{5}次的機會抵抗該傷害、將血量回復到{4}、並無敵三秒，同時增加攻擊{1:2p}%、減傷{3:2p}%、移動速度{2:2p}%，持續{6}秒",
        ["最低觸發傷害", "攻擊增加", "移動速度增加", "減傷減少", "回復血量", "抵抗死亡次數", "增益秒數", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    59: new PassiveData("HitNormalPlus",
        "每一下{0}皆會使普攻攻擊增加{1:2p}%、必殺攻擊增加{2:2p}%、移動速度增加{3:2p}%、減傷增加{4:2p}%，持續{5:3f}秒",
        ["普攻或必殺", "普攻攻擊增加", "必殺攻擊增加", "移動速度增加", "減傷增加", "持續時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    60: new PassiveData("DeadPlus",
        "當自身死亡時，獲得{0}顆法力珠、治療所有隊友{4:3f}倍攻擊，並增加{1:2p}%攻擊、{2:2p}%移動速度、{3:2p}%防禦，持續{5}秒",
        ["獲得法力數量", "攻擊增加", "移動速度增加", "防禦增加", "治療倍率", "持續時間", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    61: new PassiveData("Shortcut",
        "集氣時間降低{0:3f}秒，必殺傷害乘{1:3f}倍",
        ["集氣時間降低", "必殺倍率", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    62: new PassiveData("ManaAttack",
        "依法力珠數，0珠時普攻攻擊乘{0:3f}倍、必殺攻擊乘{2:3f}倍，至8珠時普攻攻擊乘{1:3f}倍、必殺攻擊乘{3:3f}倍",
        ["0珠普攻攻擊倍率", "8珠普攻攻擊倍率", "0珠必殺攻擊倍率", "8珠必殺攻擊倍率", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    63: new PassiveData("FlagDefense",
        "受{14}攻擊時，傷害減少{0:2p}%",
        ["減傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["受攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    64: new PassiveData("WaveSupport",
        "過Wave時，使戰場上{15}{14}角色的攻擊增加{1:2p}%、移動速度增加{2:2p}%、減傷增加{3:2p}%、暴擊機率增加{4:2p}%、暴擊傷害增加{8:2p}%{10}{0}",
        ["持續時間", "攻擊增加", "移動速度增加", "減傷減少", "暴擊增加", "目標型態", "最大數量", "陣營旗標", "暴擊傷害增加", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
    65: new PassiveData("WaveSupportAll",
        "過Wave時，使戰場上所有{12}角色的攻擊增加{1:2p}%、移動速度增加{2:2p}%、減傷增加{3:2p}%、暴擊機率增加{4:2p}%{10}{0}",
        ["持續時間", "攻擊增加", "移動速度增加", "減傷減少", "暴擊增加", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
    66: new PassiveData("GuardUp",
        "格擋{0}下後，普攻攻擊乘{1:3f}倍、必殺攻擊乘{2:3f}倍、移動速度乘{3:3f}倍、受傷乘{4:3f}倍，持續{5:3f}秒，效果內再格擋可刷新效果",
        ["格擋次數", "普攻攻擊倍率", "必殺攻擊倍率", "移動速度倍率", "受傷倍率", "持續時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    67: new PassiveData("HeroOne",
        "當{14}的角色數量≧{0}時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{6:2p}%、暴擊傷害增加{7:2p}%，每{5:3f}秒回復最大血量的{4:1p}%，必殺法力珠消耗減少{9:d}顆",
        ["數量需求", "攻擊倍率", "移動速度倍率", "受傷倍率", "治療比例", "治療間隔", "暴擊機率增加", "暴擊傷害增加", "所屬", "必殺法力珠消耗減少"],
        ["武器旗標", "未使用"],
        ["職業旗標", "未使用"]),
    68: new PassiveData("Hunt",
        "當同時攻擊目標的{14}人數≧{0}時，未暴擊普攻攻擊乘{1:3f}倍、吸血{5:2p}%，暴擊普攻攻擊乘{2:3f}倍、吸血{6:2p}%，必殺攻擊乘{3:3f}倍、吸血{7:2p}%",
        ["同時攻擊人數", "未暴擊普攻攻擊倍率", "暴擊普攻攻擊倍率", "必殺攻擊倍率", "未使用", "未暴擊吸血率", "暴擊吸血率", "必殺吸血率", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    69: new PassiveData("CharaCount",
        "當{14}的{12}角色{15}{0}名時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍，受傷乘{3:3f}倍，並每{5:3f}秒治療最大血量的{4:2p}%",
        ["數量限制", "攻擊倍率", "移動速度倍率", "受傷倍率", "治療比例", "治療間隔", "計算種類", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    70: new PassiveData("AutoMotion",
        "當{14}{12}使用必殺時{7}，使{15}普攻攻擊增加{1:2p}%、必殺攻擊增加{2:2p}%、移動速度增加{3:2p}%、減傷增加{4:2p}%，持續{6:3f}秒，並治療最大血量的{5:2p}%",
        ["目標參數", "普攻攻擊增加", "必殺攻擊增加", "移動速度增加", "減傷減少", "治療比例", "持續時間", "使用法力", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    71: new PassiveData("KillUpPlus",
        "殺死{14}敵人時提高{1:2p}%攻擊、{3:2p}%減傷、{2:2p}%移動速度、{5:2p}%暴擊率、{6:2p}%暴擊傷害，持續{4}秒，並治療自身最大血量{7:2p}%的傷害",
        ["觸發條件", "攻擊增加", "移動速度增加", "減傷增加", "持續時間", "暴擊率增加", "暴擊傷害增加", "回復百分比", "未知參數", "未知參數"],
        ["攻擊旗標", "未使用"],
        ["職業旗標", "未使用"]),
    72: new PassiveData("RengeHealer",
        "使治療範圍增加{2:3f}單位，並依遠近改變治療量，自身位置的治療量乘{0:3f}、至範圍邊界的治療量乘{1:3f}",
        ["腳底治療量倍率", "邊界治療量倍率", "治療範圍增加", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    73: new PassiveData("AttackMutate",
        "Type AttackMutate: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "攻擊增加", "移動速度增加", "防禦增加", "血量增加", "觸發種類", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    74: new PassiveData("MutateAutoskill",
        "Type MutateAutoskill: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    75: new PassiveData("StrengthWeapon",
        "使戰場上所有{15}持{14}武的角色攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%，並每{6:3f}秒治療{5:3f}點血量",
        ["是否包含自己", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "治療血量", "治療間隔", "未使用", "未使用", "未使用"],
        ["武器旗標", "未使用"],
        ["未使用", "未使用"]),
    76: new PassiveData("StrengthHome",
        "使戰場上所有{14}角色的攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%{15}",
        ["所屬", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["職業旗標", "未使用"]),
    77: new PassiveData("StateCount",
        "當有{0}中{10}狀態時，自身攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍。同時每個中上述狀態的{0}再多增加{4:2p}%攻擊、{5:2p}%移動速度、{6:2p%}減傷",
        ["計算種類", "基本攻擊倍率", "基本移動速度倍率", "基本受傷倍率", "每個攻擊增加", "每個移動速度增加", "每個減傷增加", "未使用", "未使用", "未使用"],
        ["Debuff旗標", "未使用"],
        ["未使用", "未使用"]),
    78: new PassiveData("StateCountHeal",
        "當有{0}中{10}狀態時，每{2:3f}秒治療自身最大血量的{1:2p}%，同時每個中上述狀態的{0}再多治療最大血量的{3:2p}%",
        ["計算種類", "基本治療比例", "治療間隔", "每個治療比例", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["Debuff旗標", "未使用"],
        ["未使用", "未使用"]),
    79: new PassiveData("FlagAdvance",
        "當自己使{14}得到{15}狀態時，有{0:2p}%的機率使得效果時間延長{1:2p}%、傷害增加{2:2p}%、次數增加{3:2p%}%",
        ["觸發機率", "時間增加", "傷害增加", "次數增加", "模型比例", "攻防增加", "陣營確認", "未使用", "未使用", "未使用"],
        ["Debuff旗標", "未使用"],
        ["未使用", "未使用"]),
    80: new PassiveData("HoldMana",
        "當{14}珠數≧{0}時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{7:2p}%、暴擊傷害增加{8:2p}%",
        ["需求數量", "攻擊倍率", "移動速度倍率", "受傷倍率", "未使用", "未使用", "是否需要所有職業都符合", "暴擊機率增加", "暴擊傷害增加", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    81: new PassiveData("ManaPower",
        "當獲得{12}職法力珠時，普攻攻擊增加{0:2p}%、必殺攻擊增加{1:2p}%、移動速度增加{2:2p}%、減傷增加{3:2p}%、暴擊機率增加{7:2p}%、暴擊傷害增加{8:2p}%{14}",
        ["普攻傷害增加", "技能傷害增加", "移動速度增加", "減傷減少", "治療比例", "治療間隔", "持續時間", "暴擊機率增加", "暴擊傷害增加", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    82: new PassiveData("WaveHealTarget",
        "過Wave時，治療{15}{14}角色最大血量的{0:2p}%",
        ["治療比例", "最大數量", "陣營旗標", "目標型態", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["武器旗標", "未使用"],
        ["職業旗標", "未使用"]),
    83: new PassiveData("FlagAdvancePlus",
        "當自己使{14}得到{15}狀態時，有{0:2p}%的機率使目標的攻擊減少{1:2p}%、減傷減少{2:2p}%、移動速度減少{3:2p%}%、攻擊速度減少{4:2p}%",
        ["觸發機率", "攻擊增加", "減傷減少", "移動速度增加", "攻擊速度減少", "陣營確認", "未使用", "未使用", "未使用", "未使用"],
        ["Debuff旗標", "未使用"],
        ["未使用", "未使用"]),
    84: new PassiveData("RaidIDPlus",
        "當打魔神編號{0:d}時，使{14}攻擊乘{3:3f}倍",
        ["魔神編號", "未知參數", "未知參數", "攻擊倍率", "未知參數", "是否包含其他人", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["武器旗標", "未使用"],
        ["職業旗標", "未使用"]),
    85: new PassiveData("ChargeAttack",
        "不攻擊時，每{3:3f}秒疊加一層狀態，每層使普攻攻擊增加{0:2p}%、必殺攻擊增加{1:2p}%，最高{2:2p}%",
        ["每層普攻攻擊增加", "每層必殺攻擊增加", "增加上限", "每層間隔", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    86: new PassiveData("MultiMana",
        "有{0:2p}%的機率使轉珠盤上追加{12}混合珠",
        ["觸發機率", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    87: new PassiveData("ManaArtsFlag",
        "使用必殺後，若{15}的法力球數≧{2}，則有{0:2p}%的機率使該必殺帶{14}{1}",
        ["觸發機率", "擊退力增加", "法力需求", "是否需要所有職業都符合", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["職業旗標", "未使用"]),
    88: new PassiveData("ManaArtsHealFlag",
        "使用必殺後，若{15}的法力球數≧{2}，則有{0:2p}%的機率{14}{1}",
        ["觸發機率", "未使用", "法力需求", "是否需要所有職業都符合", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
    89: new PassiveData("DropMana",
        "Type DropMana: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    90: new PassiveData("ExtraResourse",
        "法力珠不夠時，可以有一次的機會不耗法力使用必殺，並增加{1:2p}%攻擊、{2:2p}%移動速度、{3:2p}%減傷，持續{4:3f}秒",
        ["未知參數", "攻擊增加", "移動速度增加", "減傷減少", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    91: new PassiveData("ManaSpend",
        "{5}使用必殺技後，每使用{0}顆法力便可使自身增加{1:2p}%攻擊、{2:2p}%移動速度、{3:2p}%減傷、{8:2p}%暴擊率{7}，同時治療自身{4:2p}%最大血量{10}{6}",
        ["使用法力需求", "攻擊增加", "移動速度增加", "減傷減少", "治療比例", "是否需自己發動必殺", "觸發次數", "持續時間", "暴擊機率增加", "免疫時間"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
    92: new PassiveData("ChainCostCut",
        "0 Chain時必殺消耗降低{2:3f}顆、1 Chain時降低{3:3f}顆、2 Chain時降低{4:3f}顆、3 Chain時降低{5:3f}顆，Max Chain時降低{6:3f}顆{1}",
        ["未知參數", "持續時間", "0 Chain降低消耗", "1 Chain降低消耗", "2 Chain降低消耗", "3 Chain降低消耗", "Max Chain降低消耗", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    93: new PassiveData("AutoMotionEnemyCount",
        "當{14}使用必殺時{1}，使{15}攻擊增加{3:2p}%、移動速度增加{4:2p}%、減傷增加{5:2p}%、攻擊間隔減少{9:2p}%{10}，同時每個敵人的存在再增加攻擊{6:2p}%、移動速度{7:2p}%、減傷{8:2p}%，持續{2:3f}秒",
        ["目標參數", "敵人數量底限", "持續時間", "攻擊增加", "移動速度增加", "減傷減少", "每個敵人攻擊增加", "每個敵人移動速度增加", "每個敵人減傷減少", "攻擊間隔增加"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    94: new PassiveData("AutoMotionFieldJob",
        "當{14}隊員使用必殺時，若場上存在{12}職，使{15}普攻攻擊增加{2:2p}%、必殺攻擊增加{3:2p}%、移動速度增加{5:2p}%、減傷增加{6:2p}%，暴擊機率增加{4:2p}%，持續{8:3f}秒，並治療最大血量的{7:2p}%",
        ["目標參數", "是否需全部符合", "普攻攻擊增加", "必殺攻擊增加", "暴擊機率增加", "移動速度增加", "減傷減少", "治療比例", "持續時間", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    95: new PassiveData("AddScrap",
        "施放必殺時，有{1:2p}%機率增加{0:0f}顆廢珠",
        ["廢珠增加", "觸發機率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    96: new PassiveData("ManaCountUp",
        "每持有一顆{14}珠，普攻攻擊增加{2:2p}%、必殺攻擊增加{3:2p}%、移動速度乘{4:3f}倍、受傷乘{5:3f}倍、暴擊機率增加{6:2p}%、暴擊傷害增加{7:2p}%，最多算到{1}顆",
        ["是否是廢珠", "最大增傷顆數上限", "普攻攻擊增加", "必殺攻擊增加", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    97: new PassiveData("WaveScrapConvert",
        "過Wave時，消滅{0}顆廢珠，並有{2:2p}%機率額外消滅{1}顆，Boss Wave時額外消滅{4}顆{14}",
        ["消除數量", "額外消除數量", "額外消除機率", "是否轉化", "Boss Wave消除數量", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    98: new PassiveData("WaveShield",
        "過Wave時，使戰場上{4}{12}獲得{1:3f}倍攻擊力的護盾，持續{2}次{10}{3}",
        ["未使用", "防禦倍率", "護盾次數", "最大人數", "目標型態", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["免疫旗標", "未使用"],
        ["職業旗標", "未使用"]),
    99: new PassiveData("PowerDrain",
        "普攻未暴擊時有{1:2p}%機會、暴擊時有{2:2p}%機會、必殺時有{3:2p}%機會使目標降低{7:2p}%攻擊、{8:2p}%移動速度、{9:2p}%減傷，並使自身增加{4:2p}%攻擊、{5:2p}%移動速度、{6:2p}%減傷，持續{0:3f}秒",
        ["持續時間", "未暴擊普攻觸發機率", "暴擊普攻觸發機率", "必殺觸發機率", "自身攻擊增加", "自身移動速度增加", "自身減傷減少", "目標攻擊增加", "目標移動速度增加", "目標減傷減少"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    100: new PassiveData("Gold",
        "獲得金幣乘{0:3f}倍",
        ["獲得金幣倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    101: new PassiveData("Treasure",
        "使寶箱掉落機率乘{0:3f}倍",
        ["寶箱掉落率上升", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    102: new PassiveData("Experience",
        "獲取經驗乘{0:3f}倍",
        ["獲取經驗倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    103: new PassiveData("WalkPoint",
        "{0:2p}%機率回復{1:2p}%AP（無條件進位）",
        ["觸發機率", "回復比例", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    104: new PassiveData("EventPointUp",
        "Type EventPointUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    105: new PassiveData("ToubatsuID",
        "當在討伐戰編號{0:d}時，使{14}攻擊乘{3:3f}倍",
        ["討伐戰編號", "未使用", "未使用", "攻擊倍率", "未使用", "是否包含其他人", "未使用", "未使用", "未使用", "未使用"],
        ["武器旗標", "未使用"],
        ["職業旗標", "未使用"]),
	106: new PassiveData("UzuID",
    	"在深淵之渦{0}時，點數增加{1:3f}%", 
    	["深淵之渦編號", "點數倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1000: new PassiveData("ManaHealer",
        "{14}持有{0:d}顆法力珠時治療補量增加{4:2p}%、範圍增加{2:2p}%，至{1:d}顆法力珠時補量增加{5:2p}%、範圍增加{3:2p}%",
        ["法力需求數量", "最大數量", "最低限制時治療範圍增加", "最高限制時治療範圍增加", "最低限制時治療量增加", "最高限制時治療量增加", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
    1001: new PassiveData("WealPoint",
        "Type WealPoint: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1002: new PassiveData("AddSuperSkill",
        "超必殺值在以下情況時增加：普攻未暴擊時{0}、暴擊時{1}，受傷時{2}乘上受傷比例，治療時{3}，使用必殺時{4}，殺敵時{5}，隊友死亡時{6}",
        ["未暴擊普攻增加量", "暴擊增加量", "受傷增加量", "治療增加量", "必殺增加量", "殺敵增加量", "隊友死亡時增加量", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1003: new PassiveData("SuperSkillFull",
        "當超必殺計量條滿時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%、暴擊傷害增加{5:2p}%、攻擊間隔乘{6:3f}倍、治療量增加{7:2p}%{14}",
        ["未使用", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "攻擊間隔倍率", "治療量增加", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    1004: new PassiveData("AddFunnel",
        "Type AddFunnel: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1005: new PassiveData("ChangeFormUp",
        "變身時，攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%、暴擊傷害增加{5:2p}%、攻擊間隔乘{6:3f}倍，近戰範圍增加{0:2p}%{14}，並每{7:1f}秒治療最大血量的{8:2p}%，每殺一個人可以延長變身時間{9:3f}秒",
        ["近戰範圍增加", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "攻擊間隔倍率", "治療間隔", "治療比例", "殺人延長時間"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    1006: new PassiveData("SuperSkillSupport",
        "當{14}死亡時，{15}的超必殺值增加{3}。{14}殺敵時，{15}的超必殺值增加{2}。{14}使用必殺時，{15}的超必殺值增加{1}",
        ["目標參數", "使用必殺超必殺值增加", "殺敵超必殺值增加", "死亡超必殺增加量", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1007: new PassiveData("SuperSkillFull2",
        "當超必殺條滿時，治療{0}自身最大血量的{7:2p}%，並增加{2:2p}%攻擊、{3:2p}%移動速度、{4:2p}%減傷、{5:2p}%暴擊機率、{6:2p}%暴擊傷害，持續{1:d}秒",
        ["目標參數", "持續時間", "攻擊增加", "移動速度增加", "減傷減少", "暴擊機率增加", "暴擊傷害增加", "治療比例", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1008: new PassiveData("TargetStageAll",
        "{14}使戰場上所有角色的攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%、暴擊傷害增加{5:2p}%",
        ["戰場旗標", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1009: new PassiveData("ManaSlotUp",
        "依照轉盤得到的法力數，增加{14}{1:2p}%攻擊、{2:2p}%移動速度、{3:2p}%減傷、{4:2p}%暴擊機率、{5:2p}%暴擊傷害，0、1珠時為1倍，2珠時{6}倍，3珠時{7}倍",
        ["目標種類", "攻擊增加", "移動速度增加", "減傷減少", "暴擊機率增加", "暴擊傷害增加", "2珠時每珠倍率", "3珠時每珠倍率", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1010: new PassiveData("WaveManaGet",
        "{14}每{1}波獲得{0}顆{15}珠，最多{2}顆",
        ["獲得法力數量", "每幾波獲得一次", "最大獲得數量", "戰場旗標", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    1011: new PassiveData("ChainManaGet",
        "Chain時有機會獲得{0}顆{14}珠，1 Chain時{1:2p}%，2 Chain時{2:2p}%，3 Chain時{3:2p}%，Max Chain時{4:2p}%",
        ["獲得法力數量", "1 Chain得法力機率", "2 Chain得法力機率", "3 Chain得法力機率", "Max Chain得法力機率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
    1012: new PassiveData("DeadPlusCID",
        "Type DeadPlusCID: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1013: new PassiveData("MoveUp",
        "在角色移動時疊加增益，每{0}單位一層，最高{7}層。每一層增加{1:2p}%普攻攻擊、{2:2p}%必殺攻擊、{3:2p}%移動速度、{4:2p}%減傷、{5:2p}%暴擊機率，持續{6}秒，不移動{8}時開始倒數{14}",
        ["多少距離一層", "普攻攻擊增加", "必殺攻擊增加", "移動速度增加", "減傷減少", "暴擊機率增加", "時間限制", "最大層數", "是否不動作才開始倒數", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
    1014: new PassiveData("BackupHeal",
        "後備時，每{1}秒治療{2}{0}倍攻擊",
        ["治療倍率", "間隔", "目標排序", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1015: new PassiveData("ChangeFormUp2",
        "變身時{0}",
        ["強化旗標", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1016: new PassiveData("StopUp",
        "原地不動時每{1}秒得到一層增益，最高{0}層。每一層增加{2:2p}%攻擊、{3:2p}%減傷、{4:2p}%暴擊機率、{5:2p}%暴擊傷害、{6:2p}%攻擊速度",
        ["最大層數", "多久一層", "攻擊增加", "減傷減少", "暴擊機率增加", "暴擊傷害增加", "攻擊速度減少", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
    1017: new PassiveData("StrengthJob2",
        "使戰場上所有{15}{14}的角色的攻擊乘{1:3f}倍、移動速度乘{2:3f}倍、受傷乘{3:3f}倍、暴擊機率增加{4:2p}%、暴擊傷害增加{5:2p}%",
        ["是否包含自身", "攻擊倍率", "移動速度倍率", "受傷倍率", "暴擊機率增加", "暴擊傷害增加", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
	1027: new PassiveData("ChangeFormHeal",
    	"變身時使治療量乘{1:3f}倍、治療速度乘{2:3f}倍{10}{14}", 
    	["治療範圍增加", "治療量倍率", "治療速度倍率", "治療範圍樣式", "治療範圍", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
	1028: new PassiveData("AddSound",
    	"Type AddSound: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0xaaaa: new PassiveData("NOT_HANDLED",
    	"Type {14}: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
};