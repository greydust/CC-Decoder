SkillFormatData = {
    0x4c: "召喚{2}隻生物，每{0}秒一擊，對{3}{4}造成{1}倍傷害，移動速度{8}，持續{7}秒",	// ADD_FUNNEL
    0x56: "召喚{2}隻生物（最高{5}隻），每{0}秒一擊，對{3}{4}造成{1}倍傷害，{9}%機率附帶{10}效果，移動速度{8}，持續{7}秒",	// ADD_FUNNEL2
    0x1a: "我方全體{3}秒內攻擊間隔減少{4}秒，增加{1}倍攻擊、{2}倍防禦、{5}擊退力、與以下屬性",	// ADDITION_ALL
    0x19: "自身{3}秒內攻擊間隔減少{4}秒，增加{1}倍攻擊、{2}倍防禦、{5}擊退力、與以下屬性",	// ADDITION_OWN
    0x2a: "ARMOR_BREAK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ARMOR_BREAK
    4: "對大範圍內全部敵人造成{1}倍傷害，彈飛力{3}",	//     ATTACK_ALL
    3: "對自身中心範圍{2}單位內敵人造成{1}倍傷害，彈飛力{3}",	//     ATTACK_AREA
    0x29: "ATTACK_BREATH : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ATTACK_BREATH
    0x26: "近戰{1}倍傷害，並附帶{2}次增傷{3}的詛咒",	// ATTACK_CURSE
    2: "向前衝{2}單位並造成{1}倍傷害，彈飛力{3}",	//     ATTACK_DASH
    0x16: "對前方寬{2}、高{3}單位的矩形內敵人造成{1}倍傷害，彈飛力{4}",	// ATTACK_FRONT
    0x1d: "向前跳{2}單位並對敵人造成{1}倍傷害，彈飛力{3}",	// ATTACK_HIGHJUMP
    80: "向前跳{2}單位並對{4}單位內敵人造成{1}倍傷害，彈飛力{3}",	// ATTACK_HIGHJUMP2
    0: "近戰單體{1}倍傷害，彈飛力{3}",	//     ATTACK_NORMAL
    1: "近戰單體{3}+1回{1}倍傷害",	//     ATTACK_REPEAT
    0x30: "ATTACK_THROW : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ATTACK_THROW
    70: "在前方1單位處產生無法通過的石頭，並造成{1}點傷害，持續{2}秒",	// ATTACK_WALL
    0x35: "向前方{2}單位丟擲一顆持續時間{3}秒，觸發半徑{1}單位的炸彈，爆發時造成{0}倍傷害，彈飛力{5}，連鎖爆炸時傷害再乘上{4}倍",	// BOMB_THROW
    0x4d: "變身{0}秒，攻擊次數增加{2}次，單次攻擊增加{3}下{4}{5}，未知參數param1 = {1}",	// CHANGE_FORM
    0x55: "CHARGE_FRONT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// CHARGE_FRONT
    0x53: "CHARGE_SHOOT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// CHARGE_SHOOT
    8: "CREATE_TRAP : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// CREATE_TRAP
    9: "在前方1單位處產生無法通過的石頭，持續{2}秒",	//     CREATE_WALL
    0x33: "DAMAGE_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DAMAGE_AREA
    0x13: "DAMAGED_ATTACK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DAMAGED_ATTACK
    0x5b: "DAMAGED_ATTACK_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DAMAGED_ATTACK_ALL
    20: "DAMAGED_SHOOT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DAMAGED_SHOOT
    0x15: "DAMAGED_SUPPORT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DAMAGED_SUPPORT
    0x36: "DUAL_SPIRAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DUAL_SPIRAL
    0x4a: "ECHO_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ECHO_AREA
    0x58: "ENCHANT_GUTS : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ENCHANT_GUTS
    0x21: "FALL_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FALL_AREA
    0x42: "FIELD_CHANGE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FIELD_CHANGE
    0x51: "FLAG_ATTACK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FLAG_ATTACK
    0x11: "GATHER_ENEMY : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// GATHER_ENEMY
    11: "HEAL_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HEAL_ALL
    0x20: "HEAL_DEFENSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HEAL_DEFENSE
    10: "治療自身{1}倍血量，如果解除狀態，免疫該狀態{2}秒",	//     HEAL_OWN
    0x1f: "HEAL_POWER : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HEAL_POWER
    0x2e: "HEAL_STRENGTH : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HEAL_STRENGTH
    0x4b: "HEAL_UNION : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HEAL_UNION
    0x1c: "HEAL_WEAK : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HEAL_WEAK
    0x45: "HIGHJUMP_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HIGHJUMP_TARGET
    0x4e: "INTERVAL_FALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// INTERVAL_FALL
    0x2b: "KNUCKLE_RUSH : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// KNUCKLE_RUSH
    0x18: "LOCKED_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_CURSE
    30: "LOCKED_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_HEAL
    0x2d: "LOCKED_MAGNET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_MAGNET
    0x3f: "LOCKED_MAGNET_LINE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_MAGNET_LINE
    0x17: "LOCKED_SUPPORT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_SUPPORT
    0x3e: "LOCKED_SUPPORT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_SUPPORT_TARGET
    0x39: "LOCKED_TARGET_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LOCKED_TARGET_CURSE
    40: "MAGIC_CIRCLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MAGIC_CIRCLE
    0x43: "MAGIC_RANDOM : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MAGIC_RANDOM
    0x59: "MAKE_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MAKE_AREA
    0x44: "MANA_CYCLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MANA_CYCLE
    0x3b: "MANA_PRESENT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MANA_PRESENT
    0x5c: "MAX : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MAX
    0x49: "MODE_LAUNCHER : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MODE_LAUNCHER
    0x34: "PCOMMAND : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// PCOMMAND
    0x40: "REACTIVE_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// REACTIVE_HEAL
    0x1b: "REGENERATION_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// REGENERATION_ALL
    0x48: "SET_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SET_AREA
    0x10: "SHIELD_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHIELD_ALL
    15: "SHIELD_OWN : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHIELD_OWN
    0x3d: "SHIELD_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHIELD_TARGET
    0x47: "SHOOT_ALERT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_ALERT
    6: "對自身前方最後面的敵人造成{1}倍傷害",	//     SHOOT_BACK
    0x52: "SHOOT_CHAIN : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_CHAIN
    0x25: "SHOOT_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_CURSE
    0x31: "SHOOT_DOUBLE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_DOUBLE
    0x22: "SHOOT_FRONT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_FRONT
    50: "SHOOT_HEAL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_HEAL
    0x37: "SHOOT_LASER : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_LASER
    5: "對直線上單體敵人造成{1}倍傷害，彈飛力{3}",	//     SHOOT_NORMAL
    90: "SHOOT_PRIORITY : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_PRIORITY
    7: "發出{3}+1根箭矢，對隨機敵人造成{1}倍傷害",	//     SHOOT_RANDOM
    0x2c: "SHOOT_REPEAT : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_REPEAT
    0x4f: "SHOOT_SEMTEX : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_SEMTEX
    0x27: "SHOOT_SET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_SET
    0x2f: "SHOOT_SPREAD : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_SPREAD
    0x3a: "SHOOT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_TARGET
    0x54: "SHOOT_YOYO : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SHOOT_YOYO
    0x23: "SNIPE_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SNIPE_AREA
    0x24: "STEEL_GUARD : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// STEEL_GUARD
    0x12: "SUMMON : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUMMON
    13: "SUPPORT_ALL : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUPPORT_ALL
    0x57: "SUPPORT_AREA : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUPPORT_AREA
    12: "SUPPORT_OWN : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUPPORT_OWN
    0x41: "SUPPORT_PLUS : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUPPORT_PLUS
    14: "SUPPORT_RANDOM : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUPPORT_RANDOM
    60: "SUPPORT_TARGET : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SUPPORT_TARGET
    0x38: "TARGET_CURSE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TARGET_CURSE
    0xaaaa: "Type {10}: [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",    // not handled
};

function SkillFormat(skillID, skillFlag1, skillParams) {
    switch(skillID) {
        case 0x4c:
            return SkillFormatData[skillID].format(skillParams[0], skillParams[1], skillParams[2], FindType[skillParams[3]], TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], 8 * skillParams[8], skillParams[9]);
        case 0x56:
            return SkillFormatData[skillID].format(skillParams[0], skillParams[1], skillParams[2], FindType[skillParams[3]], TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], 8 * skillParams[8], skillParams[9]*100, SkillFlagString(skillFlag1));
        case 0x4d:
            var param4String = "";
            var param5String = "";
            if (skillParams[4] == 1) {
                param4String = "，使用技能結束變身狀態";
            }
            if (skillParams[5] == 1) {
                param5String = "，隱藏雙手武器";
            } else if (skillParams[5] == 2) {
                param5String = "，隱藏主手武器";
            }
            return SkillFormatData[skillID].format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], param4String, param5String, skillParams[6], skillParams[7], skillParams[8], skillParams[9]);
        default:
            if (typeof(SkillFormatData[skillID]) == "undefined" || SkillFormatData[skillID] == null) {
                return SkillFormatData[0xaaaa].format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillID);
            } else {
                return SkillFormatData[skillID].format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9]);
            }
    }
}

PassiveFormat = {
    0x3ec: "AddFunnel : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AddFunnel
    0x5f: "AddScrap : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AddScrap
    0x3ea: "AddSuperSkill : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AddSuperSkill
    8: "Always : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Always
    0x26: "ArtsFlag : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ArtsFlag
    0x2d: "ArtsHealFlag : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ArtsHealFlag
    0x49: "AttackMutate : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AttackMutate
    70: "AutoMotion : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AutoMotion
    0x5d: "AutoMotionEnemyCount : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AutoMotionEnemyCount
    0x5e: "AutoMotionFieldJob : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// AutoMotionFieldJob
    0x12: "Backup : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Backup
    0x3f6: "BackupHeal : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// BackupHeal
    3: "BossBattle : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// BossBattle
    0x37: "BugManaAttack : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// BugManaAttack
    9: "Bullet : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Bullet
    0x5c: "ChainCostCut : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ChainCostCut
    0x3f3: "ChainManaGet : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ChainManaGet
    0x3ed: "ChangeFormUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ChangeFormUp
    0x3f7: "ChangeFormUp2 : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ChangeFormUp2
    0x45: "CharaCount : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// CharaCount
    0x55: "ChargeAttack : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ChargeAttack
    0x2e: "Concentration : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Concentration
    0x17: "Counter : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Counter
    10: "CriticalFlag : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// CriticalFlag
    0x33: "CriticalRate : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// CriticalRate
    60: "DeadPlus : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DeadPlus
    0x3f4: "DeadPlusCID : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DeadPlusCID
    0x31: "Division : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Division
    0x59: "DropMana : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// DropMana
    0x68: "EventPointUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// EventPointUp
    0x66: "Experience : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Experience
    0x1d: "ExtraChainRate : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ExtraChainRate
    11: "ExtraFlag : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ExtraFlag
    12: "ExtraGuard : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ExtraGuard
    90: "ExtraResourse : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ExtraResourse
    0x34: "FastAttack : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FastAttack
    13: "Fire : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Fire
    0x4f: "FlagAdvance : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FlagAdvance
    0x53: "FlagAdvancePlus : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FlagAdvancePlus
    0x3f: "FlagDefense : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FlagDefense
    0x20: "FlagKiller : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FlagKiller
    0x22: "FlagUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FlagUp
    2: "FullHP : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// FullHP
    100: "Gold : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Gold
    0x42: "GuardUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// GuardUp
    0x3a: "Guts : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Guts
    0x11: "Heal : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Heal
    0x43: "HeroOne : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HeroOne
    0x21: "HighCritical : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HighCritical
    0x19: "HighGuard : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HighGuard
    0x24: "HighHP : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HighHP
    0x39: "HitNormal : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HitNormal
    0x3b: "HitNormalPlus : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HitNormalPlus
    80: "HoldMana : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// HoldMana
    0x44: "Hunt : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Hunt
    14: "Ice : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Ice
    0x25: "InFighter : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// InFighter
    0x2a: "Invisible : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Invisible
    0x16: "KillUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// KillUp
    0x47: "KillUpPlus : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// KillUpPlus
    1: "LowHP : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LowHP
    40: "LowPush : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LowPush
    0x27: "LowStatus : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// LowStatus
    0x57: "ManaArtsFlag : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaArtsFlag
    0x58: "ManaArtsHealFlag : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaArtsHealFlag
    0x3e: "ManaAttack : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaAttack
    0x60: "ManaCountUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaCountUp
    0x1a: "ManaGet : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaGet
    0x3e8: "ManaHealer : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaHealer
    0x1c: "ManaHunter : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaHunter
    0x1b: "ManaLot : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaLot
    0x51: "ManaPower : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaPower
    0x3f1: "ManaSlotUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaSlotUp
    0x5b: "ManaSpend : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ManaSpend
    0x3f5: "MoveUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MoveUp
    0x56: "MultiMana : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MultiMana
    50: "Mutate : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Mutate
    0x4a: "MutateAutoskill : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// MutateAutoskill
    0: "NONE : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// NONE
    0x23: "PartyUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// PartyUp
    0x38: "Position : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Position
    0x63: "PowerDrain : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// PowerDrain
    0x54: "RaidIDPlus : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// RaidIDPlus
    0x30: "ReflectionBullet : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ReflectionBullet
    0x48: "RengeHealer : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// RengeHealer
    15: "Resist : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Resist
    0x29: "ResistWeakRate : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ResistWeakRate
    0x18: "Revenge : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Revenge
    0x3d: "Shortcut : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Shortcut
    0x35: "SpCostdown : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SpCostdown
    0x4d: "StateCount : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StateCount
    0x4e: "StateCountHeal : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StateCountHeal
    0x15: "StealHP : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StealHP
    0x3f8: "StopUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StopUp
    0x13: "StrengthHealer : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StrengthHealer
    0x4c: "StrengthHome : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StrengthHome
    20: "StrengthJob : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StrengthJob
    0x3f9: "StrengthJob2 : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StrengthJob2
    0x4b: "StrengthWeapon : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// StrengthWeapon
    0x36: "SuperArmor : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SuperArmor
    0x3eb: "SuperSkillFull : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SuperSkillFull
    0x3ef: "SuperSkillFull2 : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SuperSkillFull2
    0x3ee: "SuperSkillSupport : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// SuperSkillSupport
    6: "TargetCategory : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TargetCategory
    5: "TargetCID : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TargetCID
    0x2b: "TargetEneset : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TargetEneset
    0x2c: "TargetRaidID : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TargetRaidID
    7: "TargetStage : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TargetStage
    0x3f0: "TargetStageAll : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// TargetStageAll
    0x69: "ToubatsuID : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// ToubatsuID
    0x65: "Treasure : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// Treasure
    0x2f: "UnionJob : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// UnionJob
    0x67: "WalkPoint : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WalkPoint
    0x10: "WaveHeal : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveHeal
    30: "WaveHealAll : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveHealAll
    0x1f: "WaveHealOne : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveHealOne
    0x52: "WaveHealTarget : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveHealTarget
    0x3f2: "WaveManaGet : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveManaGet
    0x61: "WaveScrapConvert : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveScrapConvert
    0x62: "WaveShield : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveShield
    0x40: "WaveSupport : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveSupport
    0x41: "WaveSupportAll : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveSupportAll
    4: "WaveUp : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WaveUp
    0x3e9: "WealPoint : [{0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}]",	// WealPoint 
};

FindType = [
    "直線上",  // LINE
    "全場",  // TARGET_TYPE,
    "單體",  // TARGET_TYPE_ONE
];

TargetType = [
    "隨機敵人",	// RANDOM
    "HP_LOW",	// HP_LOW
    "HP_HIGHT",	// HP_HIGHT
    "HPMAX_LOW",	// HPMAX_LOW
    "HPMAX_HIGHT",	// HPMAX_HIGHT
    "ATK_LOW",	// ATK_LOW
    "ATK_HIGHT",	// ATK_HIGHT
    "LEVEL_LOW",	// LEVEL_LOW
    "LEVEL_HIGHT",	// LEVEL_HIGHT
    "DISTANCE_LOW",	// DISTANCE_LOW
    "DISTANCE_HIGHT",	// DISTANCE_HIGHT
    "APPANAGE_NEAR",	// APPANAGE_NEAR
    "APPANAGE_FAR",	// APPANAGE_FAR
    "APPANAGE_NEAR2",	// APPANAGE_NEAR2
    "APPANAGE_FAR2",	// APPANAGE_FAR2
    "GROUP_ALL",	// GROUP_ALL
    "pRANDOM",	// pRANDOM
    "pHP_LOW",	// pHP_LOW
    "pHP_HIGHT",	// pHP_HIGHT
    "pHPMAX_LOW",	// pHPMAX_LOW
    "pHPMAX_HIGHT",	// pHPMAX_HIGHT
    "pATK_LOW",	// pATK_LOW
    "pATK_HIGHT",	// pATK_HIGHT
    "pLEVEL_LOW",	// pLEVEL_LOW
    "pLEVEL_HIGHT",	// pLEVEL_HIGHT
    "pDISTANCE_LOW",	// pDISTANCE_LOW
    "pDISTANCE_HIGHT",	// pDISTANCE_HIGHT
    "pAPPANAGE_NEAR",	// pAPPANAGE_NEAR
    "pAPPANAGE_FAR",	// pAPPANAGE_FAR
    "pAPPANAGE_NEAR2",	// pAPPANAGE_NEAR2
    "pAPPANAGE_FAR2",	// pAPPANAGE_FAR2
    "pGROUP_ALL",	// pGROUP_ALL
    "隨機敵人",	// oRANDOM
    "oHP_LOW",	// oHP_LOW
    "oHP_HIGHT",	// oHP_HIGHT
    "oHPMAX_LOW",	// oHPMAX_LOW
    "oHPMAX_HIGHT",	// oHPMAX_HIGHT
    "oATK_LOW",	// oATK_LOW
    "oATK_HIGHT",	// oATK_HIGHT
    "oLEVEL_LOW",	// oLEVEL_LOW
    "oLEVEL_HIGHT",	// oLEVEL_HIGHT
    "oDISTANCE_LOW",	// oDISTANCE_LOW
    "oDISTANCE_HIGHT",	// oDISTANCE_HIGHT
    "oAPPANAGE_NEAR",	// oAPPANAGE_NEAR
    "oAPPANAGE_FAR",	// oAPPANAGE_FAR
    "oAPPANAGE_NEAR2",	// oAPPANAGE_NEAR2
    "oAPPANAGE_FAR2",	// oAPPANAGE_FAR2
    "oGROUP_ALL",	// oGROUP_ALL
    "aRANDOM",	// aRANDOM
    "aHP_LOW",	// aHP_LOW
    "aHP_HIGHT",	// aHP_HIGHT
    "aHPMAX_LOW",	// aHPMAX_LOW
    "aHPMAX_HIGHT",	// aHPMAX_HIGHT
    "aATK_LOW",	// aATK_LOW
    "aATK_HIGHT",	// aATK_HIGHT
    "aLEVEL_LOW",	// aLEVEL_LOW
    "aLEVEL_HIGHT",	// aLEVEL_HIGHT
    "aDISTANCE_LOW",	// aDISTANCE_LOW
    "aDISTANCE_HIGHT",	// aDISTANCE_HIGHT
    "aAPPANAGE_NEAR",	// aAPPANAGE_NEAR
    "aAPPANAGE_FAR",	// aAPPANAGE_FAR
    "aAPPANAGE_NEAR2",	// aAPPANAGE_NEAR2
    "aAPPANAGE_FAR2",	// aAPPANAGE_FAR2
    "aGROUP_ALL",	// aGROUP_ALL
    "MYSELF",	// MYSELF
    "GROUP_ALL_NOMYSELF",	// GROUP_ALL_NOMYSELF
    "pGROUP_ALL_NOMYSELF",	// pGROUP_ALL_NOMYSELF
    "oGROUP_ALL_NOMYSELF",	// oGROUP_ALL_NOMYSELF
    "aGROUP_ALL_NOMYSELF",	// aGROUP_ALL_NOMYSELF
    "HP_LOWRATE",	// HP_LOWRATE
    "pHP_LOWRATE",	// pHP_LOWRATE
    "oHP_LOWRATE",	// oHP_LOWRATE
    "aHP_LOWRATE",	// aHP_LOWRATE
    "HP_HIGHTRATE",	// HP_HIGHTRATE
    "pHP_HIGHTRATE",	// pHP_HIGHTRATE
    "oHP_HIGHTRATE",	// oHP_HIGHTRATE
    "aHP_HIGHTRATE",    // aHP_HIGHTRATE
]

SkillFlag = [
    "範圍內全體",
    "火屬性",
    "冰屬性",
    "緩",
    "暈",
    
    "冰凍",
    "毒",
    "緩",
    "隱形",
    "MOTION",
    
    "魔法",
    "白骨化",
    "黑暗",
    "封技",
    "詛咒",
    
    "CRACKUP",
    "CANCEL",
    "GUARD_BREAK",
    "MINIMUM",
    "MAXIMUM",
    
    "穿透",
    "SHIELD_BREAK",
    "WEAPON_SWORD",
    "WEAPON_AXE",
    "WEAPON_MACE",
    
    "WEAPON_BOW",
    "WEAPON_EVIL",
    "WEAPON_HOLY",
    "WEAPON_FIST",
    "WEAPON_GUN",
    
    "WEAPON_RIFLE",
    "GUARDABLE",
    "HEAL_REVERSE",
    "HEAL_CUT",
    "NOT_FALTER",
    
    "OVER_HEAL",
    "ISBULLET",
    "IGNOREWALL",
    "ISPOISON",
    "ISAIRSTRIKE",
    
    "ISREFLECTION_BULLET",
    "ISCRACKUP",
    "IGNORENOTPUSH"
];

    
SkillPatternFlagText = [
    "變身",
    "無變身",
    "超必殺滿",
    "超必殺未滿",
];

BattlegroundFlagText = [
    "無",
    "",
    "森林",
    "雪山",
    "砂漠",
    
    "",
    "洞窟",
    "遺跡",
    "",
    "街中",
    
    "",
    "",
    "荒地",
    "夜",
    "砂浜",
    
    "高地",
    "船上",
    "海中",
    "城中",
    "戰場",
    
    "",
    "監獄内",
    "湿地",
    "異空間",
];

function SkillFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<SkillFlag.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (outputString == "") {
                outputString = SkillFlag[i];
            } else {
                outputString += " " + SkillFlag[i];
            }
        }
    }
    return outputString;
}

function SkillPatternFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<SkillPatternFlagText.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (outputString == "") {
                outputString = SkillPatternFlagText[i];
            } else {
                outputString += "且" + SkillPatternFlagText[i];
            }
        }
    }
    if (outputString != "") {
        outputString += "時";
    }
    return outputString;
}

function BattlegroundFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<BattlegroundFlagText.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (outputString == "") {
                outputString = BattlegroundFlagText[i];
            } else {
                outputString += ", " + BattlegroundFlagText[i];
            }
        }
    }
    if (outputString != "") {
        outputString = "在" + outputString + "時";
    }
    return outputString;
}