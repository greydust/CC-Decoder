﻿function SkillData(typeName, detailDescription, parameterDescription, flagDescription, iParameterDescription) {
	this.typeName = typeName;
	this.detailDescription = detailDescription;
	this.parameterDescription = parameterDescription;
    this.flagDescription = flagDescription;
    this.iParameterDescription = iParameterDescription;
}

SkillDatas = {
	0: new SkillData("ATTACK_NORMAL",
    	"近戰單體{1:2f}倍{10}傷害{3}",
    	["未使用", "傷害倍率", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	1: new SkillData("ATTACK_REPEAT",
    	"近戰單體每{2}秒一回{1:2f}倍{10}傷害，共計{3}回",
    	["未使用", "傷害倍率", "攻擊間隔", "額外攻擊次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	2: new SkillData("ATTACK_DASH",
    	"向前衝{2}單位並造成{1:2f}倍{15}傷害{3}{14}",
    	["未使用", "傷害倍率", "前衝距離", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	3: new SkillData("ATTACK_AREA",
    	"對自身前方{4}單位為中心，範圍{2}單位內敵人造成{1:2f}倍{10}傷害{3}",
    	["未使用", "傷害倍率", "範圍", "擊退力", "前方距離", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	4: new SkillData("ATTACK_ALL",
    	"對大範圍內全部敵人造成{1:2f}倍{15}傷害{3}{14}",
    	["未使用", "傷害倍率", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	5: new SkillData("SHOOT_NORMAL",
    	"對直線上單體敵人造成{1:2f}倍{10}傷害{3}",
    	["未使用", "傷害倍率", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	6: new SkillData("SHOOT_BACK",
    	"對自身前方最後面的敵人造成{1:2f}倍{10}傷害",
    	["未使用", "傷害倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	7: new SkillData("SHOOT_RANDOM",
    	"每{2}秒射出一發共計{3}根箭矢，對隨機敵人造成{1:2f}倍{10}傷害",
    	["未使用", "傷害倍率", "攻擊間隔", "額外攻擊次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
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
	10: new SkillData("HEAL_OWN",
    	"治療自身{1:2f}倍血量{10}",
    	["未使用", "治療倍率", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
	11: new SkillData("HEAL_ALL",
    	"治療我方全體{12}{1:2f}倍血量{10}",
    	["未使用", "治療倍率", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
	12: new SkillData("SUPPORT_OWN",
    	"自身增加{1:2p}%攻擊、{2:2p}%防禦、{6:2p}%移動速度{5}，攻擊間隔變為原本的{4:2p}%，持續{3}秒",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊間隔乘數", "擊退力增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	13: new SkillData("SUPPORT_ALL",
    	"我方全體{12}增加{1:2p}%攻擊、{2:2p}%防禦、{6:2p}%移動速度{5}，攻擊間隔變為原本的{4:2p}%，持續{3}秒",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊間隔乘數", "擊退力增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
	14: new SkillData("SUPPORT_RANDOM",
    	"我方全體{12}隨機一人增加{1:2p}%攻擊、{2:2p}%防禦、{6:2p}%移動速度{5}，攻擊間隔變為原本的{4:2p}%，持續{3}秒",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊間隔乘數", "擊退力增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標", "未使用"]),
	15: new SkillData("SHIELD_OWN",
    	"自身得到{1:2f}倍傷害的護盾，持續{2}秒",
    	["未使用", "護盾倍率", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	16: new SkillData("SHIELD_ALL",
    	"我方全體{12}得到{2}回{1:2f}倍傷害{10}的護盾",
    	["未使用", "護盾倍率", "護盾次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["增益旗標", "未使用"],
        ["職業旗標", "未使用"]),
	17: new SkillData("GATHER_ENEMY",
    	"GATHER_ENEMY : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	18: new SkillData("SUMMON",
    	"SUMMON : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	19: new SkillData("DAMAGED_ATTACK",
    	"對自身周圍{2}單位內的敵人造成最大HP{1:2p}%的傷害，並對自己造成最大HP{3:2p}%的{10}傷害，同時在{0}秒內增加{4:2p}%攻擊，{5:2p}%減傷，{6:2p}%移動速度",
    	["持續時間", "對敵傷害", "範圍", "自身傷害", "攻擊增加", "減傷增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	20: new SkillData("DAMAGED_SHOOT",
    	"對直線上單體敵人造成{1:2f}倍{10}傷害，並對自身造成最大HP{3:2p}%傷害，同時在{0}秒內增加{4:2p}%攻擊，{5:2p}%減傷，{6:2p}%移動速度",
    	["持續時間", "傷害倍率", "未使用", "自身傷害", "攻擊增加", "減傷增加", "移動速度增加", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	21: new SkillData("DAMAGED_SUPPORT",
    	"DAMAGED_SUPPORT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	22: new SkillData("ATTACK_FRONT",
    	"對前方寬{2}、高{3}單位的矩形內敵人造成{1:2f}倍{10}傷害{4}",
    	["未使用", "傷害倍率", "寬", "高", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	23: new SkillData("LOCKED_SUPPORT",
    	"歌舞{3}秒，我方全體增加{1:2p}%攻擊、{2:2p}%防禦、{4:2p}%移動速度、{5:2p}%爆擊率、{6:2p}%攻擊速度{10}",
    	["未知參數", "攻擊增加", "防禦增加", "持續時間", "移動速度增加", "爆擊率增加", "攻擊速度增加", "未知參數", "未知參數", "未知參數"],
        ["免疫旗標", "未使用"],
        ["未使用", "未使用"]),
	24: new SkillData("LOCKED_CURSE",
    	"歌舞{3}秒，對敵人全體造成{10}狀態",
    	["未使用", "未使用", "未使用", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["異常狀態旗標", "未使用"],
        ["未使用", "未使用"]),
	25: new SkillData("ADDITION_OWN",
    	"自身{3}秒內增加{1:2p}%攻擊、{2:2p}%防禦、{4:2p}%攻擊速度{5}{10}",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊速度", "擊退力增加", "未使用", "未使用", "未使用", "未使用"],
        ["Buff旗標", "未使用"],
        ["未使用", "未使用"]),
	26: new SkillData("ADDITION_ALL",
    	"我方全體{12}{3}秒內增加{1:2p}%攻擊、{2:2p}%防禦、{4:2p}%攻擊速度{5}{10}",
    	["未使用", "攻擊增加", "防禦增加", "持續時間", "攻擊速度", "擊退力增加", "未使用", "未使用", "未使用", "未使用"],
        ["Buff旗標", "未使用"],
        ["職業旗標", "未使用"]),
	27: new SkillData("REGENERATION_ALL",
    	"使我方全體每{2}秒治療{1:2f}倍治療{10}，持續{3}次",
    	["未使用", "治療倍率", "治療間隔", "治療次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["未使用", "未使用"]),
	28: new SkillData("HEAL_WEAK",
    	"治療我方{12}最低血量者{1:2f}倍血量，並增加{2:2p}%攻擊，{3:2p}%防禦，持續{4}秒{10}",
    	["未使用", "治療倍率", "攻擊增加", "防禦增加", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
	29: new SkillData("ATTACK_HIGHJUMP",
    	"向前跳{2}單位並對半徑{4:3f}單位內的敵人造成{1:2f}倍{15}傷害{3}{14}",
    	["未使用", "傷害倍率", "前跳距離", "擊退力", "範圍半徑", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	30: new SkillData("LOCKED_HEAL",
    	"LOCKED_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	31: new SkillData("HEAL_POWER",
    	"治療我方全體{12}{1:2f}倍血量，並增加{2:2p}%攻擊，持續{3}秒{10}",
    	["未使用", "治療倍率", "攻擊增加", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
	32: new SkillData("HEAL_DEFENSE",
    	"治療我方全體{12}{1:2f}倍血量，並增加{2:2p}%防禦，持續{3}秒{10}",
    	["未使用", "治療倍率", "防禦增加", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
	33: new SkillData("FALL_AREA",
    	"對前方{3}單位處{14}的敵人造成{1:2f}倍{10}傷害",
    	["未使用", "傷害倍率", "半徑", "前方距離", "寬倍率", "高倍率", "特效種類", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	34: new SkillData("SHOOT_FRONT",
    	"對前方{2}單位，高4.5單位、寬{4}單位的敵人造成{1:2f}倍{10}傷害{3}",
    	["未使用", "傷害倍率", "前方距離", "擊退力", "範圍寬度", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	35: new SkillData("SNIPE_AREA",
    	"對下圖範圍內敵人造成{1:2f}倍{10}傷害{3}<br>{2}",
    	["未使用", "傷害倍率", "攻擊範圍", "擊退力", "特效種類", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	36: new SkillData("STEEL_GUARD",
    	"自身{2}無敵{3}秒，期間不能移動與攻擊",
    	["未使用", "未使用", "是否包含隊友", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	37: new SkillData("SHOOT_CURSE",
    	"對直線上單體敵人造成{1:2f}倍{10}傷害，並附帶{2}次增傷{3}的詛咒",
    	["未使用", "傷害倍率", "詛咒次數", "詛咒增傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	38: new SkillData("ATTACK_CURSE",
    	"近戰{1:2f}倍{10}傷害，並附帶{2}次增傷{3}的詛咒",
    	["未使用", "傷害倍率", "詛咒次數", "詛咒增傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	39: new SkillData("SHOOT_SET",
    	"發射一枚飄浮彈，將在{2:3f}秒內飄浮到前方{2}單位處，對碰到的單體敵人造成{1:2f}倍{10}傷害，擊退力1.5",
    	["未使用", "傷害倍率", "最遠距離", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	40: new SkillData("MAGIC_CIRCLE",
    	"MAGIC_CIRCLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	41: new SkillData("ATTACK_BREATH",
    	"ATTACK_BREATH : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	42: new SkillData("ARMOR_BREAK",
    	"ARMOR_BREAK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	43: new SkillData("KNUCKLE_RUSH",
    	"近戰單體{3}回{1:2f}倍{10}傷害（間隔{2}秒），再近戰單體{4:2f}倍{10}傷害{5}",
    	["未使用", "攻擊倍率2", "攻擊間隔", "攻擊次數", "攻擊倍率2", "擊退力", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	44: new SkillData("SHOOT_REPEAT",
    	"每{2}秒一發射一發箭矢對直線上單體敵人造成{1:2f}倍{10}傷害，共計{3}回",
    	["未使用", "傷害倍率", "攻擊間隔", "額外攻擊次數", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	45: new SkillData("LOCKED_MAGNET",
    	"LOCKED_MAGNET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	46: new SkillData("HEAL_STRENGTH",
    	"治療我方全體{12}{1:2f}倍血量，並增加{2:2p}%攻擊，{3:2p}%防禦，持續{4}秒{10}",
    	["未使用", "治療倍率", "攻擊增加", "防禦增加", "持續時間", "免疫時間", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
	47: new SkillData("SHOOT_SPREAD",
    	"發射一枚箭矢，對直線上單體與其{14}內的敵人造成{15:2f}倍{10}傷害{4}{16}",
    	["最近傷害倍率", "爆炸種類", "爆炸範圍1", "爆炸範圍2", "擊退力", "最遠傷害倍率", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	48: new SkillData("ATTACK_THROW",
    	"ATTACK_THROW : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	49: new SkillData("SHOOT_DOUBLE",
    	"在上下1.5單位處各射出一發箭矢，對擊中的敵人造成{1:2f}倍{10}傷害{3}",
    	["未使用", "未使用", "未使用", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	50: new SkillData("SHOOT_HEAL",
    	"對直線上單體敵人造成{1:2f}倍{10}傷害{3}，並對{4}{12}造成傷害{2:2f}倍的治療{11}",
    	["未使用", "傷害倍率", "治療倍率", "擊退力", "目標型態", "免疫時間", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊及治療旗標", "未使用"],
        ["職業旗標", "未使用"]),
	51: new SkillData("DAMAGE_AREA",
    	"展開以前方{16:3f}單位為中心，高{14:3f}寬{15:3f}單位的領域，使領域內所有{3}{17}{10}，持續{4}秒",
    	["傷害倍率", "傷害間隔", "領域範圍參數", "影響目標種類", "持續時間", "傷害增加", "受傷增加", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	52: new SkillData("PCOMMAND",
    	"執行以下指令：{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}",
    	["指令", "指令", "指令", "指令", "指令", "指令", "指令", "指令", "指令", "指令"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	53: new SkillData("BOMB_THROW",
    	"向前方{2}單位丟擲一顆持續時間{3}秒，觸發半徑{1}單位的炸彈，爆發時造成{0:2f}倍{10}傷害{5}，連鎖爆炸時傷害再乘上{4:2f}倍",
    	["傷害倍率", "觸發半徑", "前丟距離", "持續時間", "連鎖倍率", "擊退力", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	54: new SkillData("DUAL_SPIRAL",
    	"DUAL_SPIRAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	55: new SkillData("SHOOT_LASER",
    	"向前方射出每{6}秒造成{1:2f}倍{10}傷害的雷射，最大直徑{5}單位，最小直徑{4}單位，飛行速度{3}單位{2}",
    	["攻擊次數", "傷害倍率", "是否跟隨施法者移動", "飛行速度", "雷射直徑", "雷射最大直徑", "攻擊間隔", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	56: new SkillData("TARGET_CURSE",
    	"對{1}敵人造成{10}狀態，持續{2:2f}倍預設時間",
    	["未使用", "目標型態", "時間倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["減益旗標", "未使用"],
        ["未使用", "未使用"]),
	57: new SkillData("LOCKED_TARGET_CURSE",
    	"LOCKED_TARGET_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	58: new SkillData("SHOOT_TARGET",
    	"對{2}一名目標造成{1:2f}倍{10}傷害",
    	["未使用", "傷害倍率", "目標型態", "特效種類", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	59: new SkillData("MANA_PRESENT",
    	"MANA_PRESENT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	60: new SkillData("SUPPORT_TARGET",
    	"SUPPORT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	61: new SkillData("SHIELD_TARGET",
    	"SHIELD_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	62: new SkillData("LOCKED_SUPPORT_TARGET",
    	"LOCKED_SUPPORT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	63: new SkillData("LOCKED_MAGNET_LINE",
    	"LOCKED_MAGNET_LINE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	64: new SkillData("REACTIVE_HEAL",
    	"對我方{3}{12}得到受傷時治療{1:2f}倍治療的效果，持續{2}次{11}",
    	["未使用", "治療倍率", "治療次數", "目標型態", "符合旗標時治療倍率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "被攻擊旗標"],
        ["職業旗標", "未使用"]),
	65: new SkillData("SUPPORT_PLUS",
    	"SUPPORT_PLUS : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	66: new SkillData("FIELD_CHANGE",
    	"將地形換成{4}，持續{5}秒{1}{2}",
    	["換場景特效", "施法者死亡是否回復", "是否直接覆蓋原本地形", "未使用", "地形代號", "持續時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	67: new SkillData("MAGIC_RANDOM",
        "放出{3}顆魔彈（間隔{2}秒），對{5}隨機敵人半徑{4}單位範圍內造成{1:2f}倍{10}傷害",
    	["未使用", "攻擊倍率", "攻擊間隔", "額外攻擊次數", "攻擊範圍", "攻擊目標範圍", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	68: new SkillData("MANA_CYCLE",
    	"在{4}秒內增加{1:2p}%攻擊、{2:2p}%減傷、{3:2p}%移動速度、{7:2p}%爆擊率、{8:2p}%爆擊傷害，增加攻擊速度{9:2p}%{6}，如果時間結束時擊殺至少{14}名敵人，則會返還{15}點同職法力",
    	["未知參數", "攻擊乘數", "減傷乘數", "移動速度乘數", "持續時間", "返還法力參數", "每5秒血量變動", "爆擊率增加", "爆擊傷害增加", "攻擊速度降低"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	69: new SkillData("HIGHJUMP_TARGET",
    	"跳躍並造成前方{16}單位，半徑{17}單位內隨機{3}名敵人{1:2f}倍{15}傷害{6}{14}",
    	["未使用", "傷害倍率", "未使用", "目標數量", "目標型態", "跳躍範圍", "擊退力", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	70: new SkillData("ATTACK_WALL",
    	"在前方1.5單位處產生無法通過的石頭，並造成{1}點{10}傷害，持續{2}秒",
    	["未使用", "傷害點數", "持續時間", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	71: new SkillData("SHOOT_ALERT",
    	"SHOOT_ALERT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	72: new SkillData("SET_AREA",
    	"在自己的前方{14}單位設置一個半徑{15}單位的範圍，{0}會對其範圍{16}內敵人造成{1:2f}倍{10}傷害{7}，共計{5}次，最短間隔{4}秒{6}",
    	["索敵模式", "傷害倍率", "攻擊範圍", "索敵範圍", "攻擊間隔", "攻擊次數", "持續時間", "擊退力", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	73: new SkillData("MODE_LAUNCHER",
    	"在前方{16}單位處展開半徑{17}大小的砲陣，點擊時可開砲，對目標造成{1:2f}倍{10}傷害{4}、並對半徑{3}內的其他敵人造成{2:2f}倍{10}傷害{4}，最多可砲擊{6}次，每次至少間隔{7}秒，持續{5}秒",
    	["攻擊範圍", "直擊攻擊倍率", "擴散攻擊倍率", "擴散半徑", "擊退力", "持續時間", "次數", "攻擊間隔", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	74: new SkillData("ECHO_AREA",
    	"在前方{14}單位展開半徑{15}單位的反響區域，對區域內造成{5:2f}倍{10}傷害，並使範圍內的敵人受傷時對所有其他敵人造成{1:2f}倍的傷害（最多每{4}秒一次，一次區間僅會取最高傷害），持續{3}秒",
    	["未使用", "反響倍率", "反響範圍參數", "持續時間", "反響間隔", "傷害倍率", "是否對本身造成傷害", "反響旗標", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	75: new SkillData("HEAL_UNION",
    	"治療我方全體{0:2f}倍血量{11}{14}",
    	["治療倍率", "攻擊增加", "移動速度增加", "減傷增加", "持續時間", "爆擊率增加", "攻擊速度增加", "需符合的最少人數", "所屬旗標", "免疫時間"],
        ["武器種類旗標", "治療旗標"],
        ["職業旗標", "未使用"]),
	76: new SkillData("ADD_FUNNEL",
    	"召喚{2}隻生物，每{0}秒一擊，對{4}{3}目標造成{1:2f}倍{10}傷害，移動速度{8}，持續{7}秒",
    	["每擊間隔", "傷害倍率", "生物數", "對象範圍", "目標型態", "未使用", "未使用", "持續時間", "移動倍率(基礎8單位)", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	77: new SkillData("CHANGE_FORM",
    	"變身{0}，攻擊次數增加{2}次，單次攻擊增加{3}下{4}{5}",
    	["持續時間", "未使用", "攻擊次數增加", "單次攻擊增加次數", "使用技能是否結束變身", "隱藏武器參數", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	78: new SkillData("INTERVAL_FALL",
    	"在{0}秒中每{1}秒對敵人造成{4:2f}倍{10}傷害{5}{14}{2}",
    	["持續時間", "攻擊間隔", "攻擊次數", "目標型態", "攻擊倍率", "擊退力", "擴散半徑", "擴散倍率", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	79: new SkillData("SHOOT_SEMTEX",
    	"發射一枚箭矢對直線上單體敵人造成{7:2f}倍{10}傷害{8}，並在目標上附上一顆{4}秒後爆炸的炸彈，爆炸時對{14}內敵人造成{15:2f}倍{10}傷害{3}{16}{9}",
    	["爆炸種類", "最近傷害倍率", "最遠傷害倍率", "炸彈擊退力擊退力", "引爆時間", "爆炸範圍1", "爆炸範圍2", "直擊傷害倍率", "直擊擊退力", "是否會炸到我方"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	80: new SkillData("ATTACK_HIGHJUMP2",
    	"向前跳{2}單位並對{4}單位內敵人造成{1:2f}倍{15}傷害{3}{14}",
    	["未使用", "傷害倍率", "前跳距離", "擊退力", "範圍", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	81: new SkillData("FLAG_ATTACK",
    	"FLAG_ATTACK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	82: new SkillData("SHOOT_CHAIN",
    	"射出{6:2f}倍速度的箭矢，對直線上單體造成{1:2f}倍{10}傷害{4}，再對長{5}單位、寬{5}單位內由近至遠的{3}名敵人造成{10}傷害{4}，每串一個人傷害便乘{2:3f}倍。",
    	["未使用", "攻擊倍率", "後續攻擊倍率", "總攻擊數量", "擊退力", "後續攻擊範圍", "第一發飛行速度倍率", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	83: new SkillData("CHARGE_SHOOT",
    	"CHARGE_SHOOT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	84: new SkillData("SHOOT_YOYO",
    	"丟出迴力鏢，對行進範圍上的敵人造成{10}傷害{6}，去程時為{1:2f}倍、停留時為{3:2f}倍、回程時為{2:2f}倍。在目標地點停留{4}秒，傷害間隔為{5}秒，來回{0}次。迴力鏢的初速度為每秒{14:3f}單位，加速度為每秒{15:3f}單位",
    	["額外發射次數", "去程傷害倍率", "回程傷害倍率", "停留傷害倍率", "停留時間", "停留傷害間隔", "擊退力", "速度參數", "加速度參數", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
	85: new SkillData("CHARGE_FRONT",
    	"CHARGE_FRONT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	86: new SkillData("ADD_FUNNEL2",
    	"召喚{2}隻生物（最高{5}隻），每{0}秒一擊，對{4}{3}目標造成{1:2f}倍{10}傷害{11}，移動速度{8}，持續{7}秒",
    	["每擊間隔", "傷害倍率", "生物數", "對象範圍", "目標型態", "最高同時存在數", "未使用", "持續時間", "移動倍率(基礎8單位)", "附加狀態機率"],
        ["攻擊旗標", "機率攻擊旗標"],
        ["未使用", "未使用"]),
	87: new SkillData("SUPPORT_AREA",
    	"在前方{14}單位處展開寬{15}單位、高{16}單位的領域，每{8}秒增加{1}%攻擊、{2}%減傷{5}，最高{3}%攻擊、{4}%減傷。增益持續{17}秒，領域持續{7}秒",
    	["是否跟隨施法者移動", "攻擊增加", "減傷增加", "最大攻擊增加", "最大減傷增加", "增益旗標", "未使用", "領域持續時間", "增益間隔時間", "範圍"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	88: new SkillData("ENCHANT_GUTS",
    	"使{3}{2}名隊友得到一次抵抗死亡的機會，在死亡時會自動治療{4}點生命並且無敵{5}秒（不可疊加）",
    	["未使用", "未使用", "目標數量", "目標型態", "治療量", "無敵時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	89: new SkillData("MAKE_AREA",
    	"MAKE_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	90: new SkillData("SHOOT_PRIORITY",
    	"SHOOT_PRIORITY : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	91: new SkillData("DAMAGED_ATTACK_ALL",
    	"對所有敵人造成{1:2f}倍攻擊+{2:2p}%最大HP的{10}傷害，並對自己造成最大HP{3:2p}%的傷害{4}",
    	["未使用", "攻擊倍率", "血量傷害倍率", "自身傷害", "擊退力", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用", "未使用"]),
   	92: new SkillData("CHARGE_SPREAD", 
    	"原地集氣並在點擊後射出，擊中時爆炸並傷害範圍內所有人，每{3}秒累積一層，最多累積{4}層。造成{1:2f}倍{10}傷害{5}，爆炸範圍高{7}x2、寬{7}，每一層傷害再增加{2:2f}倍。集滿時造成{14:2f}倍{11}傷害{6}，爆炸範圍高{8}x2、寬{8}",
    	["未使用", "傷害倍率", "每層傷害倍率增加", "每層秒數", "最大層數", "未集滿擊退力", "集滿擊退力", "未集滿範圍", "集滿範圍", "未使用"],
        ["攻擊參數", "集滿氣攻擊參數"],
        ["未使用", "未使用"]),
    93: new SkillData("CHANGE_FORM2",
    	"變身{0}，攻擊次數增加{2}次，單次攻擊增加{3}下{4}{5}",
    	["持續時間", "變身後動作模型ID", "增加攻擊次數", "單次攻擊增加次數", "使用技能是否結束變身", "隱藏武器參數", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	94: new SkillData("RESERVE00",
    	"RESERVE00 : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]",
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	95: new SkillData("RESERVE01",
    	"RESERVE01 : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	96: new SkillData("STEEL_GUARD_MOVE",
    	"使{14}{12}隊員無敵{2:3f}秒，並增加攻擊{4:3p}%、移動速度{5:3p}%", 
    	["未使用", "武器旗標符合時Buff上限", "無敵時間", "目標型態", "攻擊增加", "移動速度增加", "未使用", "未使用", "未使用", "未使用"],
        ["武器旗標", "未使用"],
        ["職業旗標", "未使用"]),
	97: new SkillData("REFLECTION_BARRIER",
    	"REFLECTION_BARRIER : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
	0xaaaa: new SkillData("NOT_HANDLED",
    	"Type {14}: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}, {13}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用", "未使用"]),
};