﻿function SkillData(typeName, detailDescription, parameterDescription, flagDescription, iParameterDescription) {
	this.typeName = typeName;
	this.detailDescription = detailDescription;
	this.parameterDescription = parameterDescription;
    this.flagDescription = flagDescription;
    this.iParameterDescription = iParameterDescription;
}

SkillDatas = {
	0x4c: new SkillData("ADD_FUNNEL",
    	"召喚{2}隻生物，每{0}秒一擊，對{3}{4}造成{1}倍傷害，移動速度{8}，持續{7}秒",
    	["每擊間隔", "傷害倍率", "生物數", "對象範圍", "目標型態", "未使用", "未使用", "持續時間", "移動倍率(基礎8單位)", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x56: new SkillData("ADD_FUNNEL2",
    	"召喚{2}隻生物（最高{5}隻），每{0}秒一擊，對{3}{4}造成{1}倍傷害，{9}%機率附帶{10}效果，移動速度{8}，持續{7}秒",
    	["每擊間隔", "傷害倍率", "生物數", "對象範圍", "目標型態", "最高同時存在數", "未使用", "持續時間", "移動倍率(基礎8單位)", "附加狀態機率"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x1a: new SkillData("ADDITION_ALL",
    	"我方全體{3}秒內攻擊間隔減少{4}秒，增加{1}倍攻擊、{2}倍防禦、{5}擊退力、與以下屬性",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊間隔減少", "擊退力增加", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x19: new SkillData("ADDITION_OWN",
    	"自身{3}秒內攻擊間隔減少{4}秒，增加{1}倍攻擊、{2}倍防禦、{5}擊退力、與以下屬性",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊間隔減少", "擊退力增加", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x2a: new SkillData("ARMOR_BREAK",
    	"ARMOR_BREAK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	4: new SkillData("ATTACK_ALL",
    	"對大範圍內全部敵人造成{1}倍傷害，擊退力{3}",
    	["未使用", "傷害倍率", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	3: new SkillData("ATTACK_AREA",
    	"對自身中心範圍{2}單位內敵人造成{1}倍傷害，彈飛力{3}",
    	["未使用", "傷害倍率", "範圍", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x29: new SkillData("ATTACK_BREATH",
    	"ATTACK_BREATH : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x26: new SkillData("ATTACK_CURSE",
    	"近戰{1}倍傷害，並附帶{2}次增傷{3}的詛咒",
    	["未使用", "傷害倍率", "詛咒次數", "詛咒增傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	2: new SkillData("ATTACK_DASH",
    	"向前衝{2}單位並造成{1}倍傷害，擊退力{3}",
    	["未使用", "傷害倍率", "前衝距離", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x16: new SkillData("ATTACK_FRONT",
    	"對前方寬{2}、高{3}單位的矩形內敵人造成{1}倍傷害，擊退力{4}",
    	["未使用", "傷害倍率", "寬", "高", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x1d: new SkillData("ATTACK_HIGHJUMP",
    	"向前跳{2}單位並對敵人造成{1}倍傷害，擊退力{3}",
    	["未使用", "傷害倍率", "前跳距離", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	80: new SkillData("ATTACK_HIGHJUMP2",
    	"向前跳{2}單位並對{4}單位內敵人造成{1}倍傷害，擊退力{3}",
    	["未使用", "傷害倍率", "前跳距離", "擊退力", "範圍", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0: new SkillData("ATTACK_NORMAL",
    	"近戰單體{1}倍傷害，擊退力{3}",
    	["未使用", "傷害倍率", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	1: new SkillData("ATTACK_REPEAT",
    	"近戰單體每{2}秒一回共計{3}+1回{1}倍傷害",
    	["未使用", "傷害倍率", "攻擊間隔", "攻擊次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x30: new SkillData("ATTACK_THROW",
    	"ATTACK_THROW : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	70: new SkillData("ATTACK_WALL",
    	"在前方1單位處產生無法通過的石頭，並造成{1}點傷害，持續{2}秒",
    	["未使用", "傷害點數", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x35: new SkillData("BOMB_THROW",
    	"向前方{2}單位丟擲一顆持續時間{3}秒，觸發半徑{1}單位的炸彈，爆發時造成{0}倍傷害，擊退力{5}，連鎖爆炸時傷害再乘上{4}倍",
    	["傷害倍率", "觸發半徑", "前丟距離", "持續時間", "連鎖倍率", "擊退力", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x4d: new SkillData("CHANGE_FORM",
    	"變身{0}秒，攻擊次數增加{2}次，單次攻擊增加{3}下{4}{5}",
    	["持續時間", "未使用", "攻擊次數增加", "單次攻擊增加次數", "使用技能是否結束變身", "隱藏武器參數", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x55: new SkillData("CHARGE_FRONT",
    	"CHARGE_FRONT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x53: new SkillData("CHARGE_SHOOT",
    	"CHARGE_SHOOT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	8: new SkillData("CREATE_TRAP",
    	"CREATE_TRAP : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	9: new SkillData("CREATE_WALL",
    	"在前方1.5單位處產生無法通過的石頭，持續{2}秒",
    	["未使用", "未使用", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x33: new SkillData("DAMAGE_AREA",
    	"展開以自身為中心，高{10}寬{11}單位的領域，使領域內所有{12}{13}{14}{15}持續{4}秒",
    	["傷害間隔", "傷害倍率", "領域範圍參數", "未使用", "持續時間", "傷害增加", "受傷增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x13: new SkillData("DAMAGED_ATTACK",
    	"對自身周圍{2}單位內的敵人造成最大HP{1}%的傷害，並對自己造成最大HP{3}%的傷害，同時在{0}秒內增加{4}%攻擊，{5}%防禦，{6}%移動速度",
    	["持續時間", "對敵傷害", "範圍", "自身傷害", "攻擊增加", "防禦增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x5b: new SkillData("DAMAGED_ATTACK_ALL",
    	"對所有敵人造成{1}倍攻擊+{2}%最大HP的傷害，並對自己造成最大HP{3}%的傷害，擊退力{4}",
    	["未使用", "攻擊倍率", "血量傷害倍率", "自身傷害", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	20: new SkillData("DAMAGED_SHOOT",
    	"對直線上單體敵人造成{1}倍傷害，並對自身造成最大HP{3}%傷害，同時在{0}秒內增加{4}%攻擊，{5}%防禦，{6}%移動速度",
    	["持續時間", "傷害倍率", "未使用", "自身傷害", "攻擊增加", "防禦增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x15: new SkillData("DAMAGED_SUPPORT",
    	"DAMAGED_SUPPORT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x36: new SkillData("DUAL_SPIRAL",
    	"DUAL_SPIRAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x4a: new SkillData("ECHO_AREA",
    	"在前方{10}單位展開半徑{11}單位的反響區域，對區域內造成{5}倍傷害，並使範圍內的敵人受傷時對所有其他敵人造成{1}倍的傷害（最多每{4}秒一次，一次區間僅會取最高傷害），持續{3}秒",
    	["未使用", "反響倍率", "反響範圍參數", "持續時間", "反響間隔", "傷害倍率", "是否對本身造成傷害", "反響旗標", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x58: new SkillData("ENCHANT_GUTS",
    	"使{3}{2}名隊友得到一次抵抗死亡的機會，在死亡時會自動治療{4}點生命並且無敵{5}秒（不可疊加）",
    	["未使用", "未使用", "目標數量", "目標型態", "治療量", "無敵時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x21: new SkillData("FALL_AREA",
    	"對前方{3}單位處{10}的敵人造成{1}倍傷害",
    	["未使用", "傷害倍率", "半徑", "前方距離", "寬倍率", "高倍率", "特效種類", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x42: new SkillData("FIELD_CHANGE",
    	"將地形換成{4}，持續{5}秒{1}{2}",
    	["換場景特效", "施法者死亡是否回復", "是否直接覆蓋原本地形", "未使用", "地形代號", "持續時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x51: new SkillData("FLAG_ATTACK",
    	"FLAG_ATTACK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x11: new SkillData("GATHER_ENEMY",
    	"GATHER_ENEMY : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	11: new SkillData("HEAL_ALL",
    	"治療我方全體{1}倍血量，如果有解除異常狀態，免疫該異常狀態{2}秒",
    	["未使用", "治療倍率", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x20: new SkillData("HEAL_DEFENSE",
    	"治療我方全體{1}倍血量，並增加{2}倍防禦，持續{3}秒，如果有解除異常狀態，免疫該異常狀態{4}秒",
    	["未使用", "治療倍率", "防禦增加", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	10: new SkillData("HEAL_OWN",
    	"治療自身{1}倍血量，如果有解除異常狀態，免疫該異常狀態{2}秒",
    	["未使用", "治療倍率", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x1f: new SkillData("HEAL_POWER",
    	"治療我方全體{1}倍血量，並增加{2}倍攻擊，持續{3}秒，如果有解除異常狀態，免疫該異常狀態{4}秒",
    	["未使用", "治療倍率", "攻擊增加", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x2e: new SkillData("HEAL_STRENGTH",
    	"治療我方全體{1}倍血量，並增加{2}倍攻擊，{3}倍防禦，持續{4}秒，如果有解除異常狀態，免疫該異常狀態{5}秒",
    	["未使用", "治療倍率", "攻擊增加", "防禦", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x4b: new SkillData("HEAL_UNION",
    	"治療我方全體{0}倍血量{14}{15}",
    	["治療倍率", "攻擊增加", "移動速度增加", "防禦增加", "持續時間", "爆擊率增加", "攻擊速度增加", "需符合的最少人數", "所屬旗標", "免疫時間"],
        ["武器種類旗標", "治療旗標"],
        ["職業旗標", "未使用"]),
	0x1c: new SkillData("HEAL_WEAK",
    	"HEAL_WEAK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "免疫時間", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x45: new SkillData("HIGHJUMP_TARGET",
    	"HIGHJUMP_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x4e: new SkillData("INTERVAL_FALL",
    	"INTERVAL_FALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x2b: new SkillData("KNUCKLE_RUSH",
    	"KNUCKLE_RUSH : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x18: new SkillData("LOCKED_CURSE",
    	"LOCKED_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	30: new SkillData("LOCKED_HEAL",
    	"LOCKED_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x2d: new SkillData("LOCKED_MAGNET",
    	"LOCKED_MAGNET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x3f: new SkillData("LOCKED_MAGNET_LINE",
    	"LOCKED_MAGNET_LINE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x17: new SkillData("LOCKED_SUPPORT",
    	"LOCKED_SUPPORT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x3e: new SkillData("LOCKED_SUPPORT_TARGET",
    	"LOCKED_SUPPORT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x39: new SkillData("LOCKED_TARGET_CURSE",
    	"LOCKED_TARGET_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	40: new SkillData("MAGIC_CIRCLE",
    	"MAGIC_CIRCLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x43: new SkillData("MAGIC_RANDOM",
    	"MAGIC_RANDOM : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x59: new SkillData("MAKE_AREA",
    	"MAKE_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x44: new SkillData("MANA_CYCLE",
    	"MANA_CYCLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x3b: new SkillData("MANA_PRESENT",
    	"MANA_PRESENT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x5c: new SkillData("MAX",
    	"MAX : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x49: new SkillData("MODE_LAUNCHER",
    	"MODE_LAUNCHER : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x34: new SkillData("PCOMMAND",
    	"PCOMMAND : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x40: new SkillData("REACTIVE_HEAL",
    	"REACTIVE_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x1b: new SkillData("REGENERATION_ALL",
    	"REGENERATION_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x48: new SkillData("SET_AREA",
    	"SET_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x10: new SkillData("SHIELD_ALL",
    	"SHIELD_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	15: new SkillData("SHIELD_OWN",
    	"SHIELD_OWN : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x3d: new SkillData("SHIELD_TARGET",
    	"SHIELD_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x47: new SkillData("SHOOT_ALERT",
    	"SHOOT_ALERT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	6: new SkillData("SHOOT_BACK",
    	"對自身前方最後面的敵人造成{1}倍傷害",
    	["未使用", "傷害倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x52: new SkillData("SHOOT_CHAIN",
    	"SHOOT_CHAIN : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x25: new SkillData("SHOOT_CURSE",
    	"SHOOT_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x31: new SkillData("SHOOT_DOUBLE",
    	"SHOOT_DOUBLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x22: new SkillData("SHOOT_FRONT",
    	"SHOOT_FRONT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	50: new SkillData("SHOOT_HEAL",
    	"SHOOT_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x37: new SkillData("SHOOT_LASER",
    	"SHOOT_LASER : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	5: new SkillData("SHOOT_NORMAL",
    	"對直線上單體敵人造成{1}倍傷害，擊退力{3}",
    	["未使用", "傷害倍率", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	90: new SkillData("SHOOT_PRIORITY",
    	"SHOOT_PRIORITY : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	7: new SkillData("SHOOT_RANDOM",
    	"每{2}秒射出一發共計{3}+1根箭矢，對隨機敵人造成{1}倍傷害",
    	["未使用", "傷害倍率", "攻擊間隔", "攻擊次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x2c: new SkillData("SHOOT_REPEAT",
    	"SHOOT_REPEAT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x4f: new SkillData("SHOOT_SEMTEX",
    	"SHOOT_SEMTEX : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x27: new SkillData("SHOOT_SET",
    	"SHOOT_SET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x2f: new SkillData("SHOOT_SPREAD",
    	"SHOOT_SPREAD : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x3a: new SkillData("SHOOT_TARGET",
    	"SHOOT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x54: new SkillData("SHOOT_YOYO",
    	"SHOOT_YOYO : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x23: new SkillData("SNIPE_AREA",
    	"SNIPE_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x24: new SkillData("STEEL_GUARD",
    	"STEEL_GUARD : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x12: new SkillData("SUMMON",
    	"SUMMON : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	13: new SkillData("SUPPORT_ALL",
    	"SUPPORT_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x57: new SkillData("SUPPORT_AREA",
    	"SUPPORT_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	12: new SkillData("SUPPORT_OWN",
    	"SUPPORT_OWN : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x41: new SkillData("SUPPORT_PLUS",
    	"SUPPORT_PLUS : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	14: new SkillData("SUPPORT_RANDOM",
    	"SUPPORT_RANDOM : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	60: new SkillData("SUPPORT_TARGET",
    	"SUPPORT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0x38: new SkillData("TARGET_CURSE",
    	"TARGET_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0xaaaa: new SkillData("NOT_HANDLED",
    	"Type {14}: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
};