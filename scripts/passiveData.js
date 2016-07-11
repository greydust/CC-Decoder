﻿function PassiveData(typeName, detailDescription, parameterDescription, flagDescription, iParameterDescription) {
	this.typeName = typeName;
	this.detailDescription = detailDescription;
	this.parameterDescription = parameterDescription;
    this.flagDescription = flagDescription;
    this.iParameterDescription = iParameterDescription;
}

PassiveDatas = {
    0x3ec: new PassiveData("AddFunnel",
        "Type AddFunnel: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x5f: new PassiveData("AddScrap",
        "Type AddScrap: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3ea: new PassiveData("AddSuperSkill",
        "Type AddSuperSkill: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    8: new PassiveData("Always",
        "Type Always: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "血量加成", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x26: new PassiveData("ArtsFlag",
        "施放必殺時有{0:1p}%的機率{13}{1}",
        ["必殺觸發機率", "擊退力增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    0x2d: new PassiveData("ArtsHealFlag",
        "施放必殺時有{0:1p}%的機率{13}{1}",
        ["必殺觸發機率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["未使用"]),
    0x49: new PassiveData("AttackMutate",
        "Type AttackMutate: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "攻擊增加", "移動速度增加", "防禦增加", "血量增加", "觸發種類", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    70: new PassiveData("AutoMotion",
        "Type AutoMotion: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x5d: new PassiveData("AutoMotionEnemyCount",
        "Type AutoMotionEnemyCount: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x5e: new PassiveData("AutoMotionFieldJob",
        "Type AutoMotionFieldJob: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x12: new PassiveData("Backup",
        "Type Backup: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f6: new PassiveData("BackupHeal",
        "Type BackupHeal: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    3: new PassiveData("BossBattle",
        "Type BossBattle: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x37: new PassiveData("BugManaAttack",
        "Type BugManaAttack: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    9: new PassiveData("Bullet",
        "Type Bullet: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "新子彈飛行速度", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    0x5c: new PassiveData("ChainCostCut",
        "Type ChainCostCut: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f3: new PassiveData("ChainManaGet",
        "Chain時有機會獲得{0}顆{13}珠，1 Chain時{1:1p}%，2 Chain時{2:1p}%，3 Chain時{3:1p}%，Max Chain時{4:1p}%",
        ["獲得法力數量", "1 Chain得法力機率", "2 Chain得法力機率", "3 Chain得法力機率", "Max Chain得法力機率", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標"]),
    0x3ed: new PassiveData("ChangeFormUp",
        "Type ChangeFormUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "攻擊速度增加", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f7: new PassiveData("ChangeFormUp2",
        "Type ChangeFormUp2: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x45: new PassiveData("CharaCount",
        "Type CharaCount: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x55: new PassiveData("ChargeAttack",
        "Type ChargeAttack: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x2e: new PassiveData("Concentration",
        "Type Concentration: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x17: new PassiveData("Counter",
        "當受到近戰{3}普攻時，有{0:1p}%的機率減傷{2:1p}%並反擊{1}倍{14}傷害{13}，最多每{4}秒一次",
        ["觸發機率", "傷害倍率", "受傷倍率", "是否可反擊暴擊", "冷卻時間", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    10: new PassiveData("CriticalFlag",
        "暴擊時有{0:1p}%的機率{13}{1}",
        ["暴擊時觸發機率", "擊退力增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    0x33: new PassiveData("CriticalRate",
        "暴擊機率增加{0:1p}%{13}",
        ["暴擊機率增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    60: new PassiveData("DeadPlus",
        "Type DeadPlus: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f4: new PassiveData("DeadPlusCID",
        "Type DeadPlusCID: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x31: new PassiveData("Division",
        "Type Division: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x59: new PassiveData("DropMana",
        "Type DropMana: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x68: new PassiveData("EventPointUp",
        "Type EventPointUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x66: new PassiveData("Experience",
        "Type Experience: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x1d: new PassiveData("ExtraChainRate",
        "必殺威力增加{0:1p}%",
        ["必殺增傷倍率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    11: new PassiveData("ExtraFlag",
        "普攻時有{0:1p}%的機率{13}{1}",
        ["觸發機率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    12: new PassiveData("ExtraGuard",
        "Type ExtraGuard: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    90: new PassiveData("ExtraResourse",
        "Type ExtraResourse: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x34: new PassiveData("FastAttack",
        "讓攻擊間隔成為{0}秒一次，並增加{1:1p}%攻擊力",
        ["新攻擊間隔", "攻擊增加", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    13: new PassiveData("Fire",
        "Type Fire: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x4f: new PassiveData("FlagAdvance",
        "當自己使{13}得到{14}狀態時，有{0:1p}%的機率使得效果時間延長{1:1p}%、傷害增加{2:1p}%、次數增加{3:1p%}%",
        ["觸發機率", "時間增加", "傷害增加", "次數增加", "模型比例", "攻防增加", "陣營確認", "未使用", "未使用", "未使用"],
        ["Debuff旗標", "未使用"],
        ["未使用"]),
    0x53: new PassiveData("FlagAdvancePlus",
        "當自己使{13}得到{14}狀態時，有{0:1p}%的機率使目標的攻擊減少{1:1p}%、減傷減少{2:1p}%、移動速度減少{3:1p%}%、攻擊速度減少{4:1p}%",
        ["觸發機率", "攻擊增加", "減傷減少", "移動速度增加", "攻擊速度減少", "陣營確認", "未使用", "未使用", "未使用", "未使用"],
        ["Debuff旗標", "未使用"],
        ["未使用"]),
    0x3f: new PassiveData("FlagDefense",
        "受{13}攻擊時，傷害減少{0:1p}%",
        ["減傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["受攻擊旗標", "未使用"],
        ["未使用"]),
    0x20: new PassiveData("FlagKiller",
        "Type FlagKiller: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x22: new PassiveData("FlagUp",
        "Type FlagUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    2: new PassiveData("FullHP",
        "Type FullHP: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    100: new PassiveData("Gold",
        "Type Gold: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x42: new PassiveData("GuardUp",
        "Type GuardUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3a: new PassiveData("Guts",
        "當受到{0}點以上的致命傷害時，有{5}次的機會抵抗該傷害、將血量回復到{4}、並無敵三秒，同時增加攻擊{1:1p}%、減傷{3:1p}%、移動速度{2:1p}%，持續{6}秒",
        ["最低觸發傷害", "攻擊增加", "移動速度增加", "減傷增加", "回復血量", "抵抗死亡次數", "增益秒數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x11: new PassiveData("Heal",
        "Type Heal: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x43: new PassiveData("HeroOne",
        "Type HeroOne: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x21: new PassiveData("HighCritical",
        "Type HighCritical: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["暴擊傷害增加", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    0x19: new PassiveData("HighGuard",
        "格擋減傷再增加{0:1p}%（原始為60%）",
        ["格擋減傷", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x24: new PassiveData("HighHP",
        "Type HighHP: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x39: new PassiveData("HitNormal",
        "Type HitNormal: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3b: new PassiveData("HitNormalPlus",
        "Type HitNormalPlus: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    80: new PassiveData("HoldMana",
        "Type HoldMana: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x44: new PassiveData("Hunt",
        "當同時攻擊目標的{13}人數≧{0}時，普攻未暴擊吸血{5:1p}%、暴擊吸血{6:1p}%，必殺吸血{7:1p}%",
        ["同時攻擊人數", "未知參數", "未知參數", "未知參數", "未知參數", "未暴擊吸血率", "暴擊吸血率", "必殺吸血率", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["職業旗標"]),
    14: new PassiveData("Ice",
        "Type Ice: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x25: new PassiveData("InFighter",
        "Type InFighter: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x2a: new PassiveData("Invisible",
        "Type Invisible: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x16: new PassiveData("KillUp",
        "殺死敵人時提高{1:1p}%攻擊、{3:1p}%減傷、{2:1p}%移動速度，並治療自身最大血量{4:1p}%的傷害",
        ["未使用", "攻擊增加", "移動速度增加", "減傷增加", "回復百分比", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x47: new PassiveData("KillUpPlus",
        "殺死{13}敵人時提高{1:1p}%攻擊、{3:1p}%減傷、{2:1p}%移動速度、{5:1p}%暴擊率、{6:1p}%暴擊傷害，持續{4}秒，並治療自身最大血量{7:1p}%的傷害",
        ["觸發條件", "攻擊增加", "移動速度增加", "減傷增加", "持續時間", "暴擊率增加", "暴擊傷害增加", "回復百分比", "未知參數", "未知參數"],
        ["攻擊旗標", "未使用"],
        ["職業旗標"]),
    1: new PassiveData("LowHP",
        "Type LowHP: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    40: new PassiveData("LowPush",
        "Type LowPush: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x27: new PassiveData("LowStatus",
        "Type LowStatus: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x57: new PassiveData("ManaArtsFlag",
        "施放必殺後，若{14}的法力球數≧{2}，則有{0:1p}%的機率{13}{1}",
        ["觸發機率", "擊退力增加", "法力需求", "是否需要所有職業都符合", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["攻擊旗標", "未使用"],
        ["職業旗標"]),
    0x58: new PassiveData("ManaArtsHealFlag",
        "施放必殺後，若{14}的法力球數≧{2}，則有{0:1p}%的機率{13}{1}",
        ["觸發機率", "未使用", "法力需求", "是否需要所有職業都符合", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["治療旗標", "未使用"],
        ["職業旗標"]),
    0x3e: new PassiveData("ManaAttack",
        "施放必殺後，0珠時增加必殺傷害{2:1p}%，至8珠時增加必殺傷害{3:1p}%",
        ["未知參數", "未知參數", "8珠必殺增傷倍率", "0珠必殺增傷倍率", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x60: new PassiveData("ManaCountUp",
        "Type ManaCountUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x1a: new PassiveData("ManaGet",
        "Type ManaGet: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3e8: new PassiveData("ManaHealer",
        "Type ManaHealer: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x1c: new PassiveData("ManaHunter",
        "用未暴擊普攻、暴擊普攻、必殺殺死敵人時，分別有{0:1p}%、{1:1p}%、{2:1p}%的機率得到法力珠{13}",
        ["未暴擊機率", "暴擊機率", "技能機率", "戰場未暴擊額外機率", "戰場暴擊額外機率", "戰場技能額外機率", "戰場旗標", "戰場旗標", "戰場旗標", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x1b: new PassiveData("ManaLot",
        "Type ManaLot: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x51: new PassiveData("ManaPower",
        "Type ManaPower: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f1: new PassiveData("ManaSlotUp",
        "Type ManaSlotUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x5b: new PassiveData("ManaSpend",
        "Type ManaSpend: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f5: new PassiveData("MoveUp",
        "在角色移動時疊加增益，每{0}單位一層，最高{7}層。每一層增加{1:1p}%普攻傷害、{2:1p}%必殺傷害、{3:1p}%移動速度、{4:1p}%減傷、{5:1p}%暴擊機率，持續{6}秒，不移動{8}時開始倒數{13}",
        ["多少距離一層", "普攻傷害增加", "必殺傷害增加", "移動速度增加", "減傷增加", "暴擊率增加", "時間限制", "最大層數", "是否不動作才開始倒數", "未使用"],
        ["攻擊旗標", "未使用"],
        ["未使用"]),
    0x56: new PassiveData("MultiMana",
        "Type MultiMana: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    50: new PassiveData("Mutate",
        "Type Mutate: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "攻擊增加", "移動速度增加", "防禦增加", "血量增加", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x4a: new PassiveData("MutateAutoskill",
        "Type MutateAutoskill: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0: new PassiveData("NONE",
        "Type NONE: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x23: new PassiveData("PartyUp",
        "Type PartyUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x38: new PassiveData("Position",
        "Type Position: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x63: new PassiveData("PowerDrain",
        "Type PowerDrain: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x54: new PassiveData("RaidIDPlus",
        "Type RaidIDPlus: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x30: new PassiveData("ReflectionBullet",
        "受到遠程普攻時，傷害減低{4:1p}%，並反彈一顆傷害為{0}倍原攻擊力的子彈{2}，移動速度每秒{1}單位{3}。最多每{5}秒一次",
        ["物理反彈傷害倍率", "物理反彈子彈速度", "魔法反彈傷害倍率", "魔法反彈子彈速度", "減傷", "冷卻時間", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x48: new PassiveData("RengeHealer",
        "Type RengeHealer: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    15: new PassiveData("Resist",
        "Type Resist: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x29: new PassiveData("ResistWeakRate",
        "Type ResistWeakRate: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x18: new PassiveData("Revenge",
        "Type Revenge: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3d: new PassiveData("Shortcut",
        "Type Shortcut: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x35: new PassiveData("SpCostdown",
        "使必殺少消耗{0}珠（最低1珠）",
        ["降低必殺消耗", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x4d: new PassiveData("StateCount",
        "Type StateCount: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x4e: new PassiveData("StateCountHeal",
        "Type StateCountHeal: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x15: new PassiveData("StealHP",
        "普攻未暴擊吸血{0:1p}%、暴擊吸血{1:1p}%，必殺吸血{2:1p}%",
        ["未暴擊吸血率", "暴擊吸血率", "必殺吸血率", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f8: new PassiveData("StopUp",
        "原地不動時每{1}秒得到一層增益，最高{0}層。每一層增加{2:1p}%攻擊、{3:1p}%減傷、{4:1p}%暴擊機率、{5:1p}%暴擊傷害、{6:1p}%攻擊速度",
        ["最大層數", "多久一層", "攻擊增加", "減傷增加", "暴擊機率增加", "暴擊傷害增加", "攻擊速度增加", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x13: new PassiveData("StrengthHealer",
        "Type StrengthHealer: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x4c: new PassiveData("StrengthHome",
        "Type StrengthHome: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    20: new PassiveData("StrengthJob",
        "Type StrengthJob: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f9: new PassiveData("StrengthJob2",
        "Type StrengthJob2: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x4b: new PassiveData("StrengthWeapon",
        "Type StrengthWeapon: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x36: new PassiveData("SuperArmor",
        "Type SuperArmor: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3eb: new PassiveData("SuperSkillFull",
        "Type SuperSkillFull: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "攻擊速度增加", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3ef: new PassiveData("SuperSkillFull2",
        "Type SuperSkillFull2: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3ee: new PassiveData("SuperSkillSupport",
        "Type SuperSkillSupport: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    6: new PassiveData("TargetCategory",
        "Type TargetCategory: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    5: new PassiveData("TargetCID",
        "Type TargetCID: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x2b: new PassiveData("TargetEneset",
        "Type TargetEneset: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "血量加成", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x2c: new PassiveData("TargetRaidID",
        "Type TargetRaidID: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "血量加成", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    7: new PassiveData("TargetStage",
        "Type TargetStage: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "血量加成", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f0: new PassiveData("TargetStageAll",
        "Type TargetStageAll: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x69: new PassiveData("ToubatsuID",
        "Type ToubatsuID: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x65: new PassiveData("Treasure",
        "Type Treasure: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x2f: new PassiveData("UnionJob",
        "Type UnionJob: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x67: new PassiveData("WalkPoint",
        "Type WalkPoint: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x10: new PassiveData("WaveHeal",
        "Type WaveHeal: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    30: new PassiveData("WaveHealAll",
        "Type WaveHealAll: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x1f: new PassiveData("WaveHealOne",
        "Type WaveHealOne: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x52: new PassiveData("WaveHealTarget",
        "Type WaveHealTarget: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3f2: new PassiveData("WaveManaGet",
        "{13}每{1}波獲得{0}顆{14}珠，最多{2}顆",
        ["獲得法力數量", "每幾波獲得一次", "最大獲得數量", "戰場編號", "未使用", "未使用", "未使用", "未使用", "未使用", "未使用"],
        ["未使用", "未使用"],
        ["職業旗標"]),
    0x61: new PassiveData("WaveScrapConvert",
        "Type WaveScrapConvert: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x62: new PassiveData("WaveShield",
        "Type WaveShield: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x40: new PassiveData("WaveSupport",
        "Type WaveSupport: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x41: new PassiveData("WaveSupportAll",
        "Type WaveSupportAll: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    4: new PassiveData("WaveUp",
        "Type WaveUp: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
    0x3e9: new PassiveData("WealPoint",
        "Type WealPoint: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]",
        ["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
	0xaaaa: new SkillData("NOT_HANDLED",
    	"Type {13}: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}], Flag: [{10}, {11}], iParam = [{12}]", 
    	["未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數", "未知參數"],
        ["未使用", "未使用"],
        ["未使用"]),
};