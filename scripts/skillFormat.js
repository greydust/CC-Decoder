﻿function SkillFormat(skillID, skillParams, skillFlag, iParams) {
    switch(skillID) {
        case 0:
        case 2: 
        case 3:
        case 4:
        case 5:
        case 29:
        case 49: 
        case 80: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 1:
        case 7:
        case 44: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3]+1, skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 6:
        case 19:
        case 20:
        case 38:
        case 70: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 10: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[3]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], healString, skillFlag[1], iParams[0], iParams[1]);

        }
        case 11: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[2]);
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], healString, skillFlag[1], jobString, iParams[1]);
        }
        case 12: {
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerBuffString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);

        }
        case 13:
        case 14: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerBuffString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], jobString, iParams[1]);
        }
        case 16: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "並免疫" + attackTypeString;
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], jobString, iParams[1]);            
        }
        case 22: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 23: 
        case 24: {
            var debuffString = DebuffFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], debuffString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 25: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並增加" + attackTypeString;
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerBuffString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 26: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並增加" + attackTypeString;
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerBuffString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], jobString, iParams[1]);
        }
        case 27: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}".format(healFlagString);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], healString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 28:
        case 31: 
        case 46: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[5]);
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], healString, skillFlag[1], jobString, iParams[1]);            
        }
        case 32: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[4]);
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], healString, skillFlag[1], jobString, iParams[1]);            
        }
        case 33: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var rangeString = "";
            if (skillParams[4] <= 1 && skillParams[5] <=1) {
                rangeString = "半徑{0}單位內".format(skillParams[2]);
            } else {
                var width = skillParams[4] > 1 ? skillParams[4] : 1;
                var height = skillParams[5] > 1 ? skillParams[5] : 1;
                rangeString = "高{0}單位，寬{1}單位內".format(height*skillParams[2], width*skillParams[2])
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], rangeString);
        }
        case 34: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var width = 1.5;
            if (skillParams[4] > 0) {
                width = skillParams[4];
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), width, skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 35: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], FieldBitAreaString(skillParams[2]), PushPowerString(skillParams[3]), skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 36: {
            var teamMateString = "";
            if (skillParams[2] != "") {
                teamMateString = "及隊友";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], teamMateString, skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);       
        }
        case 37: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 39: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2]*1.5, skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 43: 
        case 53: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 47: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var bombRangeString = SpreadBulletString(skillParams[1], skillParams[2], skillParams[3]);
            var bombDamageRange = "";
            var bombDamageString = "";
            if (skillParams[0] == skillParams[5]) {
                bombDamageRange = skillParams[0];
            } else {
                bombDamageRange = skillParams[0] + "~" + skillParams[5];
                bombDamageString = "，越遠越靠近後者";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], bombRangeString, bombDamageRange, bombDamageString);
        }
        case 50: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[1]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[5]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, healFlagString, jobString, iParams[1]);
        }
        case 51: {
            var width = Math.abs(parseInt((skillParams[2] / 10000) % 100) * 0.1);
            var height = Math.abs(parseInt((skillParams[2] / 100) % 100) * 0.1);
            var front = Math.abs(parseInt((skillParams[2]) % 100) * 0.1);
            var targetString = "";
            if (skillParams[3] == 0) {
                targetString = "敵方";
            } else if (skillParams[3] == 1) {
                targetString = "敵我雙方";
            } else if (skillParams[3] == 2) {
                targetString = "我方";
            }
            var damageString = "";
            if (skillParams[1] > 0) {
                damageString = "每{0}秒受到{1}倍傷害".format(skillParams[1], skillParams[0]);
            }
            if (skillParams[5] > 0) {
                if (damageString == "") {
                    damageString = "傷害增加{0:2p}%".format(skillParams[5]);
                } else {
                    damageString += "、傷害增加{0:2p}%".format(skillParams[5]);
                }
            }
            if (skillParams[6] > 0) {
                if (damageString == "") {
                    damageString = "受傷增加{0:2p}%".format(skillParams[6]);
                } else {
                    damageString += "、受傷增加{0:2p}%".format(skillParams[6]);
                }
            }
            var debuffString = AttackDebuffString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], targetString, skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], debuffString, skillFlag[1], iParams[0], iParams[1], height, width, front, damageString);
        }
        case 52: {
            return SkillDatas[skillID].detailDescription.format(PCommandString(skillParams[0]), PCommandString(skillParams[1]), PCommandString(skillParams[2]), PCommandString(skillParams[3]), PCommandString(skillParams[4]), PCommandString(skillParams[5]), PCommandString(skillParams[6]), PCommandString(skillParams[7]), PCommandString(skillParams[8]), PCommandString(skillParams[9]), skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
        }
        case 55: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var followString = "";
            if (skillParams[2] == 0) {
                followString = "，並跟隨施法者移動";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], followString, skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 56: {
            var debuffString = DebuffFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], TargetType[skillParams[1]], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], debuffString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 58: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], TargetType[skillParams[2]], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 64: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            flagHealString = "";
            debuffString = DebuffFlagString(skillFlag[1]);
            if (debuffString != "") {
                flagHealString = "，當受到" + debuffString + "傷害時改為治療" + skillParams[4] + "倍治療";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], TargetType[skillParams[3]], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], flagHealString, jobString, iParams[1]);
        }
        case 65: {
            var targetTypeString = TargetType[skillParams[6]];
            var debuffString = DebuffFlagString(skillFlag[0]);
            if (debuffString != "") {
                debuffString = "，並中" + debuffString + "狀態";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], -skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], targetTypeString, skillParams[7], skillParams[8], skillParams[9], debuffString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 66: {
            var overwriteString = "";
            var deathReturnString = "";
            if (skillParams[1] != 0) {
                deathReturnString = "，施法者死亡時回復原本地形";
            }
            if (skillParams[2] != 0) {
                overwriteString = "，直接覆蓋原本的地形"
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], deathReturnString, overwriteString, skillParams[3], NullableString(BattlegroundIDText[skillParams[4]]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9]);            
        }
        case 67: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var rangeString = "";
            if (skillParams[5] == 0) {
                rangeString = "全場內";
            } else {
                var width = Math.abs(parseInt((skillParams[5] / 10000) % 100) * 0.1);
                var height = Math.abs(parseInt((skillParams[5] / 100) % 100) * 0.1);
                var front = parseInt(skillParams[5] % 100) * 0.1;
                rangeString = "前方{0}單位，寬{1}、高{2}單位內".format(front, width, height);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3]+1, skillParams[4], rangeString, skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 68: {
            var hp5String = "";
            if (skillParams[6] != 0) {
                hp5String = "，每5秒回復{0:2p}%最大HP".format(skillParams[6]);
            }
            var killNumber = skillParams[5] % 1000;
            var returnMana = parseInt(skillParams[5] / 1000) % 10;
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1]-1, 1-skillParams[2], skillParams[3]-1, skillParams[4], skillParams[5], hp5String, skillParams[7], skillParams[8], -skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], killNumber, returnMana);
        }
        case 69: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var radius = Math.abs(parseInt((skillParams[5] / 100) % 100) * 0.1);
            var front = Math.abs(parseInt(skillParams[5] % 100) * 0.1);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], PushPowerString(skillParams[6]), skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], front, radius);
         }
        case 72: {
            var front = parseInt(skillParams[3] % 100) / 10;
            var radius = parseInt(skillParams[3] / 100) / 10;
            var searchFront = parseInt(skillParams[2] % 100) / 10;
            var searchRadius = parseInt(skillParams[2] / 100) / 10;
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var timeLimitString = "";
            if (skillParams[6] > 0) {
                timeLimitString = "，持續" + skillParams[6] + "秒";
            }
            var triggerString = "";
            if (skillParams[0] == 1) {
                triggerString = "有敵人進入時";                
            } else {
                triggerString = "定時";
            }
            return SkillDatas[skillID].detailDescription.format(triggerString, skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], timeLimitString, PushPowerString(skillParams[7]), skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], searchFront, searchRadius, radius);
        }
        case 73: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var radius = parseInt(skillParams[0] / 100) / 10;
            var front = parseInt(skillParams[0] % 100) / 10;
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], front, radius);
        }
        case 74: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var radius = parseInt(skillParams[2]/100)  / 10;
            var xShift = parseInt(skillParams[2]%100) / 10;
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], xShift, radius);
        }
        case 75: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[1]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[9]);
            }
            var buffString = "";
            var homeString = HomeIDString(skillParams[8]);
            if (homeString != "") {
                if (buffString == "") {
                    buffString = "，同時增加" + homeString + "所屬";
                } else {
                    buffString += "且為" +homeString + "所屬";
                }
            }
            var weaponString = WeaponFlagString(skillFlag[0]);
            if (weaponString != "") {
                if (buffString == "") {
                    buffString = "，同持" + weaponString + "武";
                } else {
                    buffString += "且持" +weaponString + "武";
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                if (buffString == "") {
                    buffString = "，同時增加" + jobString + "職業";
                } else {
                    buffString += "且為" +jobString + "職業";
                }
            }
            if (buffString != "") {
                if (skillParams[7] > 0) {
                    buffString += "（至少" + skillParams[7] + "人）";
                }
                buffString += "{0:2p}%攻擊，{1:2p}%減傷，{2:2p}%移動速度，{3:2p}%爆擊率，{4:2p}%攻速，持續{5}秒";
                buffString = buffString.format(skillParams[1], skillParams[3], skillParams[2], skillParams[5], skillParams[6], skillParams[4]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], healString, iParams[0], iParams[1], buffString);
        }
        case 76: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], FindType[skillParams[3]], TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], 8 * skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 77:
        case 93: {
            var timeString = "";
            if (skillParams[0] > 0) {
                timeString = skillParams[0] + "秒";
            }
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
            return SkillDatas[skillID].detailDescription.format(timeString, skillParams[1], skillParams[2], skillParams[3], param4String, param5String, skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
        }
        case 78: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var spreadAttackString = "";
            if (skillParams[6] > 0 && skillParams[7] > 0) {
                spreadAttackString = "，並造成半徑{0}內的其他敵人{1}倍{3}傷害{2}".format(skillParams[6], skillParams[7], PushPowerString(skillParams[5]), attackTypeString);
            }
            var maxAttackString = "";
            if (skillParams[2] > 0) {
                maxAttackString = "（最多{0}次攻擊）".format(skillParams[2]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], maxAttackString, skillParams[3], skillParams[4], PushPowerString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], spreadAttackString);
        }
        case 79: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var bombRangeString = SpreadBulletString(skillParams[0], skillParams[5], skillParams[6]);
            var bombDamageRange = "";
            var bombDamageString = "";
            if (skillParams[1] == skillParams[2]) {
                bombDamageRange = skillParams[1];
            } else {
                bombDamageRange = skillParams[1] + "~" + skillParams[2];
                bombDamageString = "，越遠越靠近後者";
            }
            var bombTeamString = "";
            if (skillParams[9] != 0) {
                bombTeamString = "，會炸到我方"
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), skillParams[4], skillParams[5], skillParams[6], skillParams[7], PushPowerString(skillParams[8]), bombTeamString, attackTypeString, skillFlag[1], iParams[0], iParams[1], bombRangeString, bombDamageRange, bombDamageString);
        }
        case 82: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3]-1, PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);
        }
        case 84: {
            var attackTypeString = AttackTypeNoElementFlagString(skillFlag[0]);
            var startSpeed = skillParams[7] / skillParams[8] * 2;
            var accel = -startSpeed / skillParams[8];
            return SkillDatas[skillID].detailDescription.format(skillParams[0]+1, skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], PushPowerString(skillParams[6]), skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1], startSpeed, accel);
        }
        case 86: {
            var debuff2String = DebuffFlagString(skillFlag[1]);
            if (debuff2String != "") {
                debuff2String = ("，{0:2p}%機率附帶" + debuff2String + "效果").format(skillParams[9]);
            }
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], FindType[skillParams[3]], TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], 8 * skillParams[8], skillParams[9], attackTypeString, debuff2String, iParams[0], iParams[1]);
        }
        case 87: {
            var front = (parseInt(skillParams[9]) % 100) / 10;
            var width = (parseInt(skillParams[9] / 10000) % 100) / 10;
            var height = (parseInt(skillParams[9] / 100) % 100) / 10;
            var supportPowerUpString = PowerUpFlag[skillParams[5]];
            if (supportPowerUpString != "") {
                supportPowerUpString = "並獲得" + supportPowerUpString + "效果";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], parseInt(skillParams[1]*1000) / 10, skillParams[2]*100, skillParams[3]*100, skillParams[4]*100, supportPowerUpString, skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], front, width, height, skillParams[8]+1);
        }
        case 88: {
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], TargetType[skillParams[3]], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
        }
        case 91: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], attackTypeString, skillFlag[1], iParams[0], iParams[1]);            
        }
        case 92: {
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var attackTypeString2 = AttackTypeFlagString(skillFlag[1]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerString(skillParams[5]), PushPowerString(skillParams[6]), skillParams[7], skillParams[8], skillParams[9], attackTypeString, attackTypeString2, iParams[0], iParams[1], skillParams[1]+skillParams[2]*skillParams[4]);
        }
        case 96: {
            var weaponString = WeaponFlagString(skillFlag[0]);
            var targetString = "";
            if (weaponString != "" && skillParams > 0) {
                if (skillParams > 0) {
                    targetString = TargetTypeNumber[skillParams[3]].format(skillParams[1]) + weaponString + "武";
                } else {
                    targetString = TargetType[skillParams[3]] + weaponString + "武";                    
                }
            } else {
                targetString = TargetType[skillParams[3]];
            }
            var jobString = JobFlagString(iParams[0], "或");
            if (jobString != "" && weaponString != "") {
                jobString = "且為" + jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], jobString, iParams[1], targetString);            
        }
        default: {
            if (typeof(SkillDatas[skillID]) == "undefined" || SkillDatas[skillID] == null) {
                return SkillDatas[0xaaaa].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], skillID);
            } else {
                return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
            }
        }
    }
}

function PassiveFormat(passiveID, passiveParams, passiveFlag, iParams) {
    switch(passiveID) {
        case 4: {
            var triggerString = "";
            if (passiveParams[5] > 0) {
                triggerString = "若血量≧{0:2p}且≦{1:2p}，".format(passiveParams[4], passiveParams[5]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], triggerString);
        }
        case 6: {
            return PassiveDatas[passiveID].detailDescription.format(RaceText[parseInt(passiveParams[0])], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 7: {
            var bgString = "";
            if (passiveParams[0] != 0) {
                var bgFlag1 = parseInt(passiveParams[0]) % 100;
                var bgFlag2 = parseInt(passiveParams[0] / 100) % 100;
                var bgFlag3 = parseInt(passiveParams[0] / 10000) % 100;
                
                if (bgFlag1 != 0) {
                    bgString += BattlegroundFlagText[bgFlag1];
                }
                if (bgFlag2 != 1 && bgFlag2 != 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[bgFlag2];                    
                }
                if (bgFlag3 != 2 && bgFlag3 != 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[bgFlag3];
                }
                
                bgString = "當處於" + bgString + "時，";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], bgString);
        }
        case 9: {
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            var attackFlagString = (passiveParams[3] > 0 && attackTypeString != "") ? "，並有{0:2p}%的機率帶{1}".format(passiveParams[3], attackTypeString) : "";
            var attackMultiplier = passiveParams[2] > 0 ? "，攻擊乘{0:3f}倍".format(passiveParams[2]) : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], attackMultiplier, attackFlagString, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 10:
        case 11:
        case 38: {
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString);
        }
        case 12: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], DebuffFlagString(passiveFlag[0]), passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 17: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1] > 0 ? passiveParams[1] : 3, passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 18: {
            var buffString = "";
            var homeString = HomeIDString(passiveParams[0]);
            if (homeString != "") {
                if (buffString == "") {
                    buffString = homeString + "所屬";
                } else {
                    buffString += "且為" +homeString + "所屬";
                }
            }
            var weaponString = WeaponFlagString(passiveFlag[0]);
            if (weaponString != "") {
                if (buffString == "") {
                    buffString = "持" + weaponString + "武";
                } else {
                    buffString += "且持" +weaponString + "武";
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                if (buffString == "") {
                    buffString = jobString + "職";
                } else {
                    buffString += "且為" +jobString + "職";
                }
            }
            if (buffString == "") {
                buffString = "角色";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], buffString);
        }
        case 19: 
        case 1027: {
            var healRangeString = "";
            if (passiveParams[3] == 0) {
                if (passiveParams[0] > 3.5) {
                    healRangeString = "，並使治療範圍增大" + (passiveParams[0]-3.5).round(3) + "單位";
                } else if (passiveParams[0] < 3.5) {
                    healRangeString = "，並使治療範圍縮小" + (3.5-passiveParams[0]).round(3) + "單位";
                }
                var front = (passiveParams[4] % 100) / 10;
                if (front != 0) {
                    if (healRangeString == "") {
                        healRangeString = "，並使治療範圍前移" + front.round(3) + "單位";
                    } else {
                        healRangeString += "、前移" + front.round(3) + "單位";
                    }
                }
            } else if (passiveParams[3] == 1) {
                var front = (passiveParams[4] % 100) / 10;
                var width = (parseInt(passiveParams[4]/10000) % 100) / 10;
                var depth = (parseInt(passiveParams[4]/100) % 100) / 10;
                healRangeString = "，並使治療範圍成為前方{0:3f}單位，寬{1:3f}、高{2:3f}單位的矩形".format(front, width, depth);
            }
            var attackTypeHealer = passiveParams[5] == 0 ? "" : "，且變為攻擊型"
            var healFlagString = PassiveHealDebuffString(passiveFlag[0]);
            if (healFlagString != "") {
                healFlagString = "、" + healFlagString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], attackTypeHealer, passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], healFlagString, passiveFlag[1], iParams[0], iParams[1], healRangeString);
        }
        case 20: {
            var jobString = JobFlagString(iParams[0], "、") + "職";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString);
        }
        case 23: {
            var criticalString = "";
            if (passiveParams[3] <= 0) {
                criticalString = "未暴擊";
            }
            var debuffString = AttackDebuffString(passiveFlag[0]);
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], 1 - passiveParams[2], criticalString, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 24: {
            var debuffString = DebuffFlagString(passiveFlag[0]);
            if (debuffString != "") {
                debuffString = "，並免疫" + debuffString;
            }
            var teammateString = "";
            if (passiveParams[4] > 0 || passiveParams[5] > 0 || passiveParams[6] > 0) {
                teammateString = "，同時治療隊友最大血量{2:2p}%的血量，並增加隊友{1:2p}%攻擊、{3:2p}%防禦{10}，持續{0}秒".format(passiveParams[0], passiveParams[4], passiveParams[5], passiveParams[6]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], debuffString, passiveFlag[1], iParams[0], iParams[1], teammateString);
        }
        case 25: {
            return PassiveDatas[passiveID].detailDescription.format(0.4 - passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 26: {
            var manaString = "";
            if (passiveParams[0] > 0 || passiveParams[1] > 0 || passiveParams[2] >0) {
                if (passiveParams[0] > 0) {
                    manaString = "，得到{0}顆對應職業的法力珠".format(passiveParams[0]);
                }
                
                if (passiveParams[1] > 0) {
                    manaString += ("，若有" + JobFlagString(iParams[0], "、") + "職在場時，額外獲得{0}顆該職業的法力珠").format(passiveParams[1]);
                }
                
                if (passiveParams[2] >0) {
                    var bg1 = parseInt(passiveParams[3]) % 100;
                    var bg2 = parseInt(passiveParams[3] / 100) % 100;
                    var bg3 = parseInt(passiveParams[3] / 10000) % 100;
                    var battlegroundString = "";
                    if (bg1 != 0) {
                        battlegroundString = BattlegroundFlagText[bg1];
                    }
                    if (bg2 != 0) {
                        if (battlegroundString != "") {
                            battlegroundString += "、";
                        }
                        battlegroundString += BattlegroundFlagText[bg2];
                    }
                    if (bg3 != 0) {
                        if (battlegroundString != "") {
                            battlegroundString += "、";
                        }
                        battlegroundString += BattlegroundFlagText[bg3];
                    }
                    manaString += "，若處於" + battlegroundString + "，額外獲得{0}顆對應職業法力珠".format(passiveParams[2]);
                }
            }
            var bonusManaString = "";
            if (iParams[1] != 0 && passiveParams[4] > 0) {
                if (manaString != "") {
                    bonusManaString = "，並";
                }
                bonusManaString += "獲得{0}顆{1}職法力珠".format(passiveParams[4], JobManaFlagString(iParams[1]));
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], manaString, bonusManaString);
        }
        case 27: {
            var bgString = "";
            if (passiveParams[4] > 0 || passiveParams[5] > 0 || passiveParams[6] > 0) {
                if (passiveParams[4] > 0) {
                    bgString += BattlegroundFlagText[passiveParams[4]];
                }
                if (passiveParams[5] > 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[passiveParams[5]];                    
                }
                if (passiveParams[6] > 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[passiveParams[6]];
                }
                
                bgString = ("，當處於" + bgString + "時，使轉珠時兩珠機率增加{0:2p}%、三珠機率增加{1:2p}%（只取最高者）").format(passiveParams[2], passiveParams[3]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], bgString);
        }
        case 28: {
            var battleGroundString = "";
            if (passiveParams[6] > 0 || passiveParams[7] > 0 || passiveParams[8] > 0){
                var flag = (passiveParams[6] <= 0 ? 0 : 1 << passiveParams[6]) | (passiveParams[7] <= 0 ? 0 : 1 << passiveParams[7]) | (passiveParams[8] <= 0 ? 0 : 1 << passiveParams[8]);
                battleGroundString = "，" + BattlegroundFlagString(flag) + "再額外增加{0:2p}%、{1:2p}%、{2:2p}%".format(passiveParams[3], passiveParams[4], passiveParams[5])
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], battleGroundString);
        }
        case 29: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0] - 1, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 32: {
            var debuffString = DebuffFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], debuffString);
        }
        case 33: {
            var debuffString = PassiveDebuffString(passiveFlag[0]);
            if (debuffString != "") {
                debuffString = "，暴擊時" + debuffString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0]-1.5, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], debuffString, passiveFlag[1], iParams[0], iParams[1]);
        }
        case 34: {
            var debuffString = DebuffFlagString(passiveFlag[0]);
            var healString = "";
            if (passiveParams[4] > 0) {
                healString = "，同時每{0}秒治療最大血量的{1:2p}%".format(passiveParams[5], passiveParams[4]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], debuffString, healString);
        }
        case 37: {
            var attackSpeedString = passiveParams[2] > 0 ? "，基礎攻擊速度成為{0:3f}秒一次".format(passiveParams[2]) : "";
            var attackString = passiveParams[0] > 0 ? "，基礎攻擊倍率成為{0:3f}倍（原為0.5倍）".format(passiveParams[0]) : "";
            var debuffString = DebuffFlagString(passiveFlag[0]);
            var attackFlagString = (passiveParams[3] > 0 && debuffString != "") ? "，並有{0:2p}%的機率使目標{1}".format(passiveParams[3], debuffString) : "";
            return PassiveDatas[passiveID].detailDescription.format(attackString, passiveParams[1], attackSpeedString, attackFlagString, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 39: {
            var debuffString = DebuffFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(1-passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], debuffString, passiveFlag[1], iParams[0], iParams[1]);
        }
        case 42: {
            var attackString = passiveParams[6] == 1 ? "，攻擊時現形" : "";
            return PassiveDatas[passiveID].detailDescription.format(TargetTypeNumber[passiveParams[0]].format(1), passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], attackString, passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 45: {
            var debuffString = PassiveHealDebuffString(passiveFlag[0]);
            if (passiveParams[1] > 0) {
                debuffString = "{0}，如果解除狀態則免疫該狀態{1}秒".format(debuffString, passiveParams[1]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], debuffString);
        }
        case 47: {
            var jobString = JobFlagString(iParams[0], "、");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString);
        }
        case 48: {
            var magicDamageString = "";
            if (passiveParams[2] != passiveParams[0]) {
                magicDamageString = "受到魔法攻擊時則為" + passiveParams[2] + "倍";
            }
            var magicSpeedString = "";
            if (passiveParams[3] != passiveParams[1]) {
                magicSpeedString = "受到魔法攻擊時則為" + passiveParams[3] + "單位";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], magicDamageString, magicSpeedString, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 51: {
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並使攻擊附帶" + attackTypeString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString);            
        }
        case 52: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1]-1, passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 56: {
            var positionString = "";
            if (passiveParams[0] == 0) {
                positionString = "最右方{0:3f}單位".format(passiveParams[6]);
            } else {
                positionString = "最左方{0:3f}單位".format(passiveParams[6]);
            }
            var healString = "";
            if (passiveParams[4] > 0) {
                healString = "，同時每{0}秒治療最大血量的{1:2p}%".format(passiveParams[5], passiveParams[4]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], positionString, healString);
        }
        case 57: {
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                var addTypeString = "";
                if (passiveParams[6] == 0) {
                    addTypeString = "攻擊";
                } else if (passiveParams[6] == 1) {
                    addTypeString = "必殺";
                } else if (passiveParams[6] == 2) {
                    addTypeString = "攻擊與必殺";
                } else if (passiveParams[6] == 3) {
                    addTypeString = "";
                }
                attackTypeString = ("，並使{0}附帶" + attackTypeString).format(addTypeString);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString);
        }
        case 58: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 59: {
            var attackMethodString = "";
            if (passiveParams[0] == 1) {
                attackMethodString = "普攻";
            } else if (passiveParams[0] == 2) {
                attackMethodString = "必殺";
            } else {
                attackMethodString = "攻擊";
            }
            return PassiveDatas[passiveID].detailDescription.format(attackMethodString, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 63: {
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(1 - passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString);
        }
        case 64: {
            var buffString = "";
            var homeString = HomeIDString(passiveParams[7]);
            if (homeString != "") {
                if (buffString == "") {
                    buffString = homeString + "所屬";
                } else {
                    buffString += "且為" +homeString + "所屬";
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                if (buffString == "") {
                    buffString = jobString + "職";
                } else {
                    buffString += "且為" +jobString + "職";
                }
            }
            var timeString = passiveParams[0] > 0 ? "，持續{0}秒".format(passiveParams[0]) : "";
            var healDebuffString = PassiveHealDebuffString(passiveFlag[0]);
            if (healDebuffString != "") {
                healDebuffString = "，並" + healDebuffString;
            }
            var number = passiveParams[6] > 0 ? passiveParams[6] : 1;
            return PassiveDatas[passiveID].detailDescription.format(timeString, passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], healDebuffString, passiveFlag[1], iParams[0], iParams[1], buffString, TargetTypeNumber[passiveParams[5]].format(number));
        }
        case 65: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                   jobString = jobString + "職";
            }
            var timeString = passiveParams[0] > 0 ? "，持續{0}秒".format(passiveParams[0]) : "";
            var healDebuffString = PassiveHealDebuffString(passiveFlag[0]);
            if (healDebuffString != "") {
                healDebuffString = "，並" + healDebuffString;
            }
            var timeString = passiveParams[0] > 0 ? "，持續{0}秒".format(passiveParams[0]) : "";
            return PassiveDatas[passiveID].detailDescription.format(timeString, passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], healDebuffString, passiveFlag[1], jobString);
        }
        case 67: {
            var buffString = "";
            var homeString = HomeIDString(passiveParams[8]);
            if (homeString != "") {
                if (buffString == "") {
                    buffString = homeString + "所屬";
                } else {
                    buffString += "且為" +homeString + "所屬";
                }
            }
            var weaponString = WeaponFlagString(passiveFlag[0]);
            if (weaponString != "") {
                if (buffString == "") {
                    buffString = "持" + weaponString + "武";
                } else {
                    buffString += "且持" +weaponString + "武";
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                if (buffString == "") {
                    buffString = jobString + "職";
                } else {
                    buffString += "且為" +jobString + "職";
                }
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], buffString);
        }
        case 68: {
            var jobString = JobFlagString(iParams[0], "或");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString);
        }
        case 69:
        case 84: {
            var countFrontString = "";
            var ifString = "";
            if (passiveParams[6] == 0) {
                countFrontString = "前方";
                ifString = "≧";
            } else if (passiveParams[6] == 1) {
                countFrontString = "後方";
                ifString = "≧";
            } else if (passiveParams[6] == 2) {
                countFrontString = "前方";
                ifString = "≦";
            } else if (passiveParams[6] == 3) {
                countFrontString = "後方";
                ifString = "≦";
            } else if (passiveParams[6] == 4) {
                countFrontString = "前方";
                ifString = "＝";
            } else if (passiveParams[6] == 5) {
                countFrontString = "後方";
                ifString = "＝";
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
               jobString = jobString + "職";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], jobString, iParams[1], countFrontString, ifString);
        }
        case 70: {
            var casterString = "";
            var targetString = "";
            if (passiveParams[0] == 0) {
                casterString = "";
                targetString = "自身";
            } else if (passiveParams[0] == 1) {
                casterString = "";
                targetString = "全體";
            } else if (passiveParams[0] == 2) {
                casterString = "自己以外的";
                targetString = "自身";
            } else if (passiveParams[0] == 3) {
                casterString = "自己以外的";
                targetString = "全體";
            }
            var useManaString = "";
            var switchNum = parseInt(passiveParams[7] / 10);
            var manaNum = parseInt(passiveParams[7]) % 10;
            if (manaNum > 0) {
                if (switchNum == 0) {
                    useManaString = "，若使用法力數＝{0}".format(manaNum);                    
                } else if (switchNum == 1) {
                    useManaString = "，若使用法力數≧{0}".format(manaNum);                    
                } else if (switchNum == 2) {
                    useManaString = "，若使用法力數≦{0}".format(manaNum);                    
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            } else {
                jobString = "隊友";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], -passiveParams[4], passiveParams[5], passiveParams[6], useManaString, passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], jobString, iParams[1], casterString, targetString);
        }
        case 71: {
            var conditionString = "";
            if (passiveParams[0] == 0) {
                conditionString = "";
            } else if (passiveParams[0] == 1) {
                debuffString = DebuffFlagString(passiveFlag[0]);
                conditionString = debuffString + "中的";
            } else if (passiveParams[0] == 2) {
                var jobString = JobFlagString(iParams[0], "或");
                conditionString = jobString + "的";
            } else {
                conditionString = "不存在的";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], conditionString);
        }
        case 72: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0]-3.5, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 75: {
            var weaponFlagString = WeaponFlagString(passiveFlag[0]);
            var selfString = passiveParams[0] == 0 ? "自己除外的" : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], weaponFlagString, selfString);
        }
        case 76: {
            var buffString = "";
            var homeString = HomeIDString(passiveParams[0]);
            if (homeString != "") {
                if (buffString == "") {
                    buffString = homeString + "所屬";
                } else {
                    buffString += "且為" +homeString + "所屬";
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                if (buffString == "") {
                    buffString = jobString + "職";
                } else {
                    buffString += "且為" +jobString + "職";
                }
            }
            var addAttackTypeString = "";
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (passiveParams[5] > 0 || passiveParams[6] > 0 || passiveParams[7] > 0) {
                if (passiveParams[5] >0) {
                    addAttackTypeString = "，且普攻時有{0:2p}%機會".format(passiveParams[5]);
                }
                if (passiveParams[6] > 0) {
                    if (addAttackTypeString == "") {
                        addAttackTypeString = "，且暴擊時有{0:2p}%機會".format(passiveParams[6]);
                    } else {
                        addAttackTypeString += "、暴擊時有{0:2p}%機會".format(passiveParams[6]);
                    }
                }
                if (passiveParams[7] > 0) {
                    if (addAttackTypeString == "") {
                        addAttackTypeString = "，且必殺時有{0:2p}%機會".format(passiveParams[7]);
                    } else {
                        addAttackTypeString += "、必殺時有{0:2p}%機會".format(passiveParams[7]);
                    }
                }
                addAttackTypeString += "使目標上" + attackTypeString;
            }
            
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], buffString, addAttackTypeString);
        }
        case 77:
        case 78: {
            var targetTypeString = "";
            if (passiveParams[0] == 0) {
                targetTypeString = "我方角色";
            } else if (passiveParams[0] == 1) {
                targetTypeString = "敵方角色";
            } else if (passiveParams[0] == 2) {
                targetTypeString = "角色";
            }
            return PassiveDatas[passiveID].detailDescription.format(targetTypeString, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], DebuffFlagString(passiveFlag[0]), passiveFlag[1], iParams[0], iParams[1]);
        }
        case 79: {
            var targetString = "";
            if (passiveParams[6] == 0) {
                targetString = "任何人";
            } else if (passiveParams[6] == 1) {
                targetString = "敵方目標";
            } else if (passiveParams[6] == 2) {
                targetString = "我方目標";
            } else {
                targetString = "沒有人";
            }
            var debuffString = DebuffFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1]==0 ? 0 : passiveParams[1]-1, passiveParams[2]==0 ? 0 : passiveParams[2]-1, passiveParams[3]==0 ? 0 : passiveParams[3]-1, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], targetString, debuffString);
        }
        case 80: {
            var jobString = "";
            if (passiveParams[6] == 0) {
                jobString = JobFlagString(iParams[0], "或"); 
            } else {
                jobString = JobFlagString(iParams[0], "及");                
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString);
        }
        case 81: {
            var healString = "";
            if (passiveParams[4] > 0) {
                healString = "，同時每{0}秒治療最大血量的{1:2p}%".format(passiveParams[5], passiveParams[4]);
            }
            var jobManaString = JobManaFlagString(iParams[0], "、");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], jobManaString, healString);
        }
        case 82: {
            var buffString = "";
            var homeString = HomeIDString(passiveParams[2]);
            if (homeString != "") {
                if (buffString == "") {
                    buffString = homeString + "所屬";
                } else {
                    buffString += "且為" +homeString + "所屬";
                }
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                if (buffString == "") {
                    buffString = jobString + "職";
                } else {
                    buffString += "且為" +jobString + "職";
                }
            }
            var weaponString = WeaponFlagString(passiveFlag[0]);
            if (weaponString != "") {
                if (buffString == "") {
                    buffString = "持" + weaponString + "武";
                } else {
                    buffString += "且持" +weaponString + "武";
                }
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], buffString, TargetTypeNumber[passiveParams[3]].format(passiveParams[1]));
        }
        case 83: {
            var targetString = "";
            if (passiveParams[5] == 0) {
                targetString = "任何人";
            } else if (passiveParams[5] == 1) {
                targetString = "敵方目標";
            } else if (passiveParams[5] == 2) {
                targetString = "我方目標";
            } else {
                targetString = "沒有人";
            }
            var debuffString = DebuffFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], -passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], targetString, debuffString);
        }
        case 86: {
            var jobManaString = JobManaFlagString(iParams[0], "");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], jobManaString);
        }
        case 87: {
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            var jobString = "";
            if (passiveParams[3] == 0) {
                jobString = JobFlagString(iParams[0], "或");
            } else {
                jobString = JobFlagString(iParams[0], "且");
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString, jobString);
        }
        case 88: {
            var debuffString = PassiveHealDebuffString(passiveFlag[0]);
            if (passiveParams[4] > 0) {
                debuffString = "{0}，如果解除狀態則免疫該狀態{1}秒".format(debuffString, passiveParams[4]);
            }
            var jobString = "";
            if (passiveParams[3] == 0) {
                jobString = JobFlagString(iParams[0], "或");
            } else {
                jobString = JobFlagString(iParams[0], "且");
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], debuffString, jobString);
        }
        case 90: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 91: {
            var targetString = passiveParams[5] == 1 ? "自身" : "隊伍";
            var healString = "";
            var healFlagString = HealFlagString(passiveFlag[1]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, passiveParams[9]);
            }
            var triggerString = passiveParams[6] >= 0 ? "，最多觸發{0:d}次".format(passiveParams[6]) : "";
            var timeString = passiveParams[7] > 0 ? "，持續{0:3f}秒".format(passiveParams[7]) : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], targetString, triggerString, timeString, passiveParams[8], passiveParams[9], healString, passiveFlag[1], iParams[0], iParams[1]);
        }
        case 92: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1] > 0 ? "持續{0:3f}秒".format(passiveParams[1]) : "", passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 93: {
            var casterString = "";
            var targetString = "";
            if (passiveParams[0] == 0) {
                casterString = "任一";
                targetString = "自身";
            } else if (passiveParams[0] == 2) {
                casterString = "自身以外";
                targetString = "自身";
            } else if (passiveParams[0] == 3) {
                casterString = "自身以外";
                targetString = "全體";
            } else if (passiveParams[0] == 4) {
                casterString = "自身";
                targetString = "自身";
            } else {
                casterString = "任一";
                targetString = "全體";
            }
            var enemyCountString = passiveParams[1] > 0 ? "，若至少有{0}名敵人在場".format(passiveParams[1]) : "";
            var debuffString = DebuffFlagString(passiveFlag[0]);
            if (debuffString != "") {
                debuffString = "，並使攻擊帶" + debuffString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], enemyCountString, passiveParams[2], passiveParams[3], passiveParams[4], -passiveParams[5], passiveParams[6], passiveParams[7], -passiveParams[8], -passiveParams[9], debuffString, passiveFlag[1], iParams[0], iParams[1], casterString, targetString);
        }
        case 94: {
            var casterString = "";
            var targetString = "";
            if (passiveParams[0] == 0) {
                casterString = "任一";
                targetString = "自身";
            } else if (passiveParams[0] == 2) {
                casterString = "自身以外";
                targetString = "自身";
            } else if (passiveParams[0] == 3) {
                casterString = "自身以外";
                targetString = "全體";
            } else if (passiveParams[0] == 4) {
                casterString = "自身";
                targetString = "自身";
            } else {
                casterString = "任一";
                targetString = "全體";
            }
            var jobString = JobFlagString(iParams[0], passiveParams[1] == 0 ? "或" : "、");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], -passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], jobString, casterString, targetString);
        }
        case 96: {
            var jobString = "";
            if (passiveParams[0] == 0) {
                jobString = JobManaFlagString(32, "");
            } else {
                jobString = JobManaFlagString(iParams[0], "");
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString);
        }
        case 97: {
            var convertString = "";
            if (passiveParams[3] != 0) {
                var convertManaString = iParams[0] == 0 ? "隨機" : JobManaFlagString(iParams[0]) + "職";
                convertString = "，並將其轉為對應數量的{0}法力珠".format(convertManaString);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], convertString);
        }
        case 98: {
            var debuffString = DebuffFlagString(passiveFlag[0]);
            if (debuffString != "") {
                debuffString = "，並免疫" + debuffString;
            }
            var numberString = passiveParams[3] > 0 ? "，最多{0}人".format(passiveParams[3]) : "";
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                   jobString = jobString + "職";
            }
            var targetString = TargetTypeNumber[passiveParams[4]].format(passiveParams[3]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], debuffString, passiveFlag[1], jobString, iParams[1], targetString);
        }
        case 99: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], -passiveParams[6], -passiveParams[7], -passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 105: {
            var targetString = "";
            if (passiveParams[5] == 0) {
                targetString = "自身";
            } else {
                if (iParams[0] != 0) {
                    targetString = "所有" + JobFlagString(iParams[0], "、") + "職";
                } else {
                    targetString = "所有持" + WeaponFlagString(passiveFlag[0]) + "武";
                }
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], targetString);
        }
        case 104: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1]-1, passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 106: {
            var uzuString = "";
            if (passiveParams[0] > 0) {
                uzuString = "編號" + passiveParams[0];
            }
            return PassiveDatas[passiveID].detailDescription.format(uzuString, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 1000: {
            var healString = HealFlagString(passiveFlag[0]);
            if (healString != "") {
                healString = ("當持有的法力珠≧{0:d}顆時普通治療可以" + healString + "，").format(passiveParams[0]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], healString);
        }
        case 1003:
        case 1005: {
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並帶" + attackTypeString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString);
        }
        case 1006: {
            var target1 = parseInt(passiveParams[0]/100);
            var target2 = parseInt(passiveParams[0]) % 100;
            var target1String = "";
            if (target1 == 1) {
                target1String = "自身";
            } else if (target1 == 3) {
                target1String = "其他隊友";
            } else {
                target1String = "全體";
            }
            var target2String = "";
            if (target2 == 1) {
                target2String = "自身";
            } else if (target2 == 2) {
                target2String = "全體";
            } else if (target2 == 3) {
                target2String = "其他隊友";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], target1String, target2String);
        }
        case 1007: {
            var targetString = "";
            if (passiveParams[0] == 1) {
                targetString = "自身";
            } else if (passiveParams[0] == 2) {
                targetString = "全體";
            } else if (passiveParams[0] == 3) {
                targetString = "其他隊友";
            }
            return PassiveDatas[passiveID].detailDescription.format(targetString, passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
        }
        case 1008: {
            var bgString = "";
            if (passiveParams[0] != 0) {
                var bgFlag1 = parseInt(passiveParams[0]) % 100;
                var bgFlag2 = parseInt(passiveParams[0] / 100) % 100;
                var bgFlag3 = parseInt(passiveParams[0] / 10000) % 100;
                
                if (bgFlag1 != 0) {
                    bgString += BattlegroundFlagText[bgFlag1];
                }
                if (bgFlag2 != 1 && bgFlag2 != 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[bgFlag2];                    
                }
                if (bgFlag3 != 2 && bgFlag3 != 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[bgFlag3];
                }
                
                bgString = "當處於" + bgString + "時，";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], bgString);
        }
        case 1009: {
            var targetString = "";
            if (passiveParams[0] == 1) {
                targetString = "自身";
            } else if (passiveParams[0] == 3) {
                targetString = "其他隊友";
            } else {
                targetString = "全體";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6]*2, passiveParams[7]*3, passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], targetString);
        }
        case 1010: {
            var bgString = "";
            if (passiveParams[3] != 0) {
                var bgFlag1 = parseInt(passiveParams[3]) % 100;
                var bgFlag2 = parseInt(passiveParams[3] / 100) % 100;
                var bgFlag3 = parseInt(passiveParams[3] / 10000) % 100;
                
                if (bgFlag1 != 0) {
                    bgString += BattlegroundFlagText[bgFlag1];
                }
                if (bgFlag2 != 1 && bgFlag2 != 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[bgFlag2];                    
                }
                if (bgFlag3 != 2 && bgFlag3 != 0) {
                    if (bgString != "") {
                        bgString += "、";
                    }
                    bgString += BattlegroundFlagText[bgFlag3];
                }
                
                bgString = "當處於" + bgString + "時，";
            }
            var jobString = JobFlagString(iParams[0], "");
            if (jobString == "") {
                jobString = "隨機";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], bgString, jobString);
        }
        case 1011: {
            var jobString = JobFlagString(iParams[0], "");
            if (jobString == "") {
                jobString = "隨機";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString);            
        }
        case 1013: {
            var moveRequirementString = "";
            if (passiveParams[8] != 0) {
                moveRequirementString = "且不攻擊";
            }
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，疊滿時附帶" + attackTypeString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], -passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], moveRequirementString, passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], attackTypeString);
        }
        case 1014: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], TargetTypeNumber[passiveParams[2]].format(1), passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 1015: {
            return PassiveDatas[passiveID].detailDescription.format(PowerUpFlag[passiveParams[0]], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 1016: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], -passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);            
        }
        case 1017: {
            var jobString = JobFlagString(iParams[0], "、") + "職";
            var selfString = passiveParams[0] == 0 ? "自己除外的" : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], jobString, selfString);
        }
        default: {
            if (typeof(PassiveDatas[passiveID]) == "undefined" || PassiveDatas[passiveID] == null) {
                return PassiveDatas[0xaaaa].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1], passiveID);
            } else {
                return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], iParams[1]);
            }
        }
    }
}

PowerUpFlag = [
    "",
    "不死" ,
    "格擋遠程攻擊",
];

function FieldBitAreaString(bitField) {
    var width = 6;
    var height = 3;
    var bit = bitField;
    var areaString = "";
    for (var i=0 ; i<height ; i++) {
        for (var j=0 ; j<width ; j++) {
            if (bit & 1 > 0) {
                areaString += "O";
            } else {
                areaString += "X";
            }
            bit = bit >> 1;
        }
        areaString += "<br>";
    }
    
    return areaString;
}

function AttackDebuffString(flag) {
    var debuffString = DebuffFlagString(flag);
    if (debuffString != "") {
        debuffString = "，並" + debuffString + "目標";
    }
    return debuffString;
}

function PassiveDebuffString(flag) {
    var debuffString = DebuffFlagString(flag);
    if (debuffString != "") {
        debuffString = "使目標" + debuffString;
    }
    return debuffString;
}

function PassiveHealDebuffString(flag) {
    var debuffString = DebuffFlagString(flag);
    if (debuffString != "") {
        debuffString = "解除目標" + debuffString;
    }
    return debuffString;
}

function SpreadBulletString(type, range1, range2) {
    if (type == 0) {
        return "半徑" + range1 + "單位";
    } else {
        return "寬" + range1*2 + "單位、高" + range2 + "單位及寬" + range2 + "單位、高" + range1*2 + "單位";
    }
}

function PCommandString(commandParameter) {
    var command = parseInt(Math.abs(commandParameter) / 10000) % 100;
    var parameter1 = parseInt(Math.abs(commandParameter) / 100) % 100;
    var parameter2 = parseInt(Math.abs(commandParameter)) % 100;
    var direction = commandParameter >= 0 ? 1 : -1;
    
    var returnString = "";
    switch (command) {
        case 1: {
            returnString = "儲存當前位置";
            break;
        }
        case 2: {
            returnString = "儲存當前地板位置";
            break;
        }
        case 10: {
            returnString = "設定移動時間為" + (parameter1 / 10) + "秒";
            if (parameter2 == 1) {
                returnString += "，並改變面對方向";
            }
            break;
        }
        case 11: {
            returnString = "設定移動速度為" + (parameter1 / 10) + "秒";
            if (parameter2 == 1) {
                returnString += "，並改變面對方向";
            }
            break;
        }
        case 12: {
            returnString = "跳起來" + (parameter1 / 10) + "單位高";
            break;
        }
        case 20: {
            returnString = "將終點設為目前儲存點";
            break;
        }
        case 21: {
            returnString = "將終點設為(" + parameter1 + ", " + parameter2 + ")";
            break;
        }
        case 22: {
            returnString = "將終點位移修正的X值設為" + (direction * parameter1 * 0.1);
            break;
        }
        case 23: {
            returnString = "將終點位移修正的Z值設為" + (direction * parameter1 * 0.1);
            break;
        }
        case 24: {
            returnString = "將終點位移修正的X值設為" + (direction * parameter1 * 1.5);
            break;
        }
        case 25: {
            returnString = "將終點位移修正的Z值設為" + (direction * parameter1 * 1.5);
            break;
        }
        case 26: {
            returnString = "將終點位移修正的X值設為" + (direction * parameter1 * 0.1 * 1.5);
            break;
        }
        case 27: {
            returnString = "將終點位移修正的Z值設為" + (direction * parameter1 * 0.1 * 1.5);
            break;
        }
        case 30: {
            var filterString = "";
            if (parameter2 == 1) {
                filterString = "全體";
            } else if (parameter2 == 2) {
                filterString = "我方";
            } else {
                filterString = "敵方";
            }
            returnString = "尋找{0}{1}目標並將目標列表暫存起來".format(TargetType[parameter1], filterString);
            break;
        }
        case 31: {
            var direcitonString = "";
            if (parameter1 == 1 || parameter1 == 3) {
                direcitonString = "背後";
            } else {
                direcitonString = "面前";
            }
            returnString = "讀取目標列表的當前目標，將終點設為它的{0}，並將讀取目標往後移一位。若無目標則將終點設為起點".format(direcitonString);
            break;
        }
        case 32: {
            returnString = "等待" + (parameter1 / 10) + "秒";
            break;
        }
        case 33: {
            returnString = "將目標列表的讀取目標重置到列表開頭";
            break;
        }
        case 40: {
            returnString = "{0}秒後開始殘影，每{1}秒一個".format(parameter2 / 10, parameter1 / 10);
            break;
        }
        case 41: {
            returnString = "停止殘影";
            break;
        }
    }
    
    if (returnString != "") {
        returnString = "<div class=\"indent1\">" + returnString + "</div>";
    }
    return returnString;
}

function PushPowerString(power) {
    if (power > 0) {
        return "，擊退力" + power;
    } else {
        return "";
    }
}

function PushPowerAddString(power) {
    if (power > 0) {
        return "，擊退力增加" + power;
    } else {
        return "";
    }
}

function PushPowerBuffString(power) {
    if (power > 0) {
        return "、擊退力" + power;
    } else {
        return "";
    }
}

JobTypeText = [
    "戰",
    "弓",
    "魔",
    "僧",
    "騎",
    "全",
];

JobManaTypeText = [
    "戰",
    "弓",
    "魔",
    "僧",
    "騎",
    "廢",
];

function JobFlagString(flag, concat) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<JobTypeText.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (JobTypeText[i] != "") {
                if (outputString == "") {
                    outputString = JobTypeText[i];
                } else {
                    outputString += concat + JobTypeText[i];
                }
            }
        }
    }
    return outputString;
}

function JobManaFlagString(flag, concat) {
    if (flag == 31) {
        return "全";
    }
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<JobManaTypeText.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (JobManaTypeText[i] != "") {
                if (outputString == "") {
                    outputString = JobManaTypeText[i];
                } else {
                    outputString += concat + JobManaTypeText[i];
                }
            }
        }
    }
    return outputString;
}

FindType = [
    "直線上",  // LINE
    "全場",  // TARGET_TYPE,
    "單體",  // TARGET_TYPE_ONE
];

TargetType = [
    "隨機",	// RANDOM
    "當前血量由低至高",	// HP_LOW
    "當前血量由高至低",	// HP_HIGHT
    "最大血量由低至高",	// HPMAX_LOW
    "最大血量由高至低",	// HPMAX_HIGHT
    "攻擊力由低至高",	// ATK_LOW
    "攻擊力由高至低",	// ATK_HIGHT
    "等級由低至高",	// LEVEL_LOW
    "等級由高至低",	// LEVEL_HIGHT
    "依近到遠",	// DISTANCE_LOW
    "依遠到近",	// DISTANCE_HIGHT
    "依右至左",	// APPANAGE_NEAR
    "依左至右",	// APPANAGE_FAR
    "由後到前",	// APPANAGE_NEAR2
    "由前到後",	// APPANAGE_FAR2
    "所有",	// GROUP_ALL
    "隨機",	// pRANDOM
    "當前血量由低至高",	// pHP_LOW
    "當前血量由高至低",	// pHP_HIGHT
    "最大血量由低至高",	// pHPMAX_LOW
    "最大血量由高至低",	// pHPMAX_HIGHT
    "攻擊力由低至高",	// pATK_LOW
    "攻擊力由高至低",	// pATK_HIGHT
    "等級由低至高",	// pLEVEL_LOW
    "等級由高至低",	// pLEVEL_HIGHT
    "依近到遠",	// pDISTANCE_LOW
    "依遠到近",	// pDISTANCE_HIGHT
    "依右至左",	// pAPPANAGE_NEAR
    "依左至右",	// pAPPANAGE_FAR
    "由後到前",	// pAPPANAGE_NEAR2
    "由前到後",	// pAPPANAGE_FAR2
    "所有",	// pGROUP_ALL
    "隨機",	// oRANDOM
    "當前血量由低至高",	// oHP_LOW
    "當前血量由高至低",	// oHP_HIGHT
    "最大血量由低至高",	// oHPMAX_LOW
    "最大血量由高至低",	// oHPMAX_HIGHT
    "攻擊力由低至高",	// oATK_LOW
    "攻擊力由高至低",	// oATK_HIGHT
    "等級由低至高",	// oLEVEL_LOW
    "等級由高至低",	// oLEVEL_HIGHT
    "依近到遠",	// oDISTANCE_LOW
    "依遠到近",	// oDISTANCE_HIGHT
    "依右至左",	// oAPPANAGE_NEAR
    "依左至右",	// oAPPANAGE_FAR
    "由後到前",	// oAPPANAGE_NEAR2
    "由前到後",	// oAPPANAGE_FAR2
    "所有",	// oGROUP_ALL
    "隨機",	// aRANDOM
    "當前血量由低至高",	// aHP_LOW
    "當前血量由高至低",	// aHP_HIGHT
    "最大血量由低至高",	// aHPMAX_LOW
    "最大血量由高至低",	// aHPMAX_HIGHT
    "攻擊力由低至高",	// aATK_LOW
    "攻擊力由高至低",	// aATK_HIGHT
    "等級由低至高",	// aLEVEL_LOW
    "等級由高至低",	// aLEVEL_HIGHT
    "依近到遠",	// aDISTANCE_LOW
    "依遠到近",	// aDISTANCE_HIGHT
    "依右至左",	// aAPPANAGE_NEAR
    "依左至右",	// aAPPANAGE_FAR
    "由後到前",	// aAPPANAGE_NEAR2
    "由前到後",	// aAPPANAGE_FAR2
    "所有",	// aGROUP_ALL
    "自身",	// MYSELF
    "除自身以外所有隊員",	// GROUP_ALL_NOMYSELF
    "除自身以外所有隊員",	// pGROUP_ALL_NOMYSELF
    "除自身以外所有隊員",	// oGROUP_ALL_NOMYSELF
    "除自身以外所有隊員",	// aGROUP_ALL_NOMYSELF
    "血量比例由低至高",	// HP_LOWRATE
    "血量比例由低至高",	// pHP_LOWRATE
    "血量比例由低至高",	// oHP_LOWRATE
    "血量比例由低至高",	// aHP_LOWRATE
    "血量比例由高至低",	// HP_HIGHTRATE
    "血量比例由高至低",	// pHP_HIGHTRATE
    "血量比例由高至低",	// oHP_HIGHTRATE
    "血量比例由高至低",    // aHP_HIGHTRATE
]

TargetTypeNumber = [
    "隨機{0}名",	// RANDOM
    "當前血量由低至高{0}名",	// HP_LOW
    "當前血量由高至低{0}名",	// HP_HIGHT
    "最大血量由低至高{0}名",	// HPMAX_LOW
    "最大血量由高至低{0}名",	// HPMAX_HIGHT
    "攻擊力由低至高{0}名",	// ATK_LOW
    "攻擊力由高至低{0}名",	// ATK_HIGHT
    "等級由低至高{0}名",	// LEVEL_LOW
    "等級由高至低{0}名",	// LEVEL_HIGHT
    "依近到遠{0}名",	// DISTANCE_LOW
    "依遠到近{0}名",	// DISTANCE_HIGHT
    "依右至左{0}名",	// APPANAGE_NEAR
    "依左至右{0}名",	// APPANAGE_FAR
    "由後到前{0}名",	// APPANAGE_NEAR2
    "由前到後{0}名",	// APPANAGE_FAR2
    "所有",	// GROUP_ALL
    "隨機{0}名",	// pRANDOM
    "當前血量由低至高{0}名",	// pHP_LOW
    "當前血量由高至低{0}名",	// pHP_HIGHT
    "最大血量由低至高{0}名",	// pHPMAX_LOW
    "最大血量由高至低{0}名",	// pHPMAX_HIGHT
    "攻擊力由低至高{0}名",	// pATK_LOW
    "攻擊力由高至低{0}名",	// pATK_HIGHT
    "等級由低至高{0}名",	// pLEVEL_LOW
    "等級由高至低{0}名",	// pLEVEL_HIGHT
    "依近到遠{0}名",	// pDISTANCE_LOW
    "依遠到近{0}名",	// pDISTANCE_HIGHT
    "依右至左{0}名",	// pAPPANAGE_NEAR
    "依左至右{0}名",	// pAPPANAGE_FAR
    "由後到前{0}名",	// pAPPANAGE_NEAR2
    "由前到後{0}名",	// pAPPANAGE_FAR2
    "所有",	// pGROUP_ALL
    "隨機{0}名",	// oRANDOM
    "當前血量由低至高{0}名",	// oHP_LOW
    "當前血量由高至低{0}名",	// oHP_HIGHT
    "最大血量由低至高{0}名",	// oHPMAX_LOW
    "最大血量由高至低{0}名",	// oHPMAX_HIGHT
    "攻擊力由低至高{0}名",	// oATK_LOW
    "攻擊力由高至低{0}名",	// oATK_HIGHT
    "等級由低至高{0}名",	// oLEVEL_LOW
    "等級由高至低{0}名",	// oLEVEL_HIGHT
    "依近到遠{0}名",	// oDISTANCE_LOW
    "依遠到近{0}名",	// oDISTANCE_HIGHT
    "依右至左{0}名",	// oAPPANAGE_NEAR
    "依左至右{0}名",	// oAPPANAGE_FAR
    "由後到前{0}名",	// oAPPANAGE_NEAR2
    "由前到後{0}名",	// oAPPANAGE_FAR2
    "所有",	// oGROUP_ALL
    "隨機{0}名",	// aRANDOM
    "當前血量由低至高{0}名",	// aHP_LOW
    "當前血量由高至低{0}名",	// aHP_HIGHT
    "最大血量由低至高{0}名",	// aHPMAX_LOW
    "最大血量由高至低{0}名",	// aHPMAX_HIGHT
    "攻擊力由低至高{0}名",	// aATK_LOW
    "攻擊力由高至低{0}名",	// aATK_HIGHT
    "等級由低至高{0}名",	// aLEVEL_LOW
    "等級由高至低{0}名",	// aLEVEL_HIGHT
    "依近到遠{0}名",	// aDISTANCE_LOW
    "依遠到近{0}名",	// aDISTANCE_HIGHT
    "依右至左{0}名",	// aAPPANAGE_NEAR
    "依左至右{0}名",	// aAPPANAGE_FAR
    "由後到前{0}名",	// aAPPANAGE_NEAR2
    "由前到後{0}名",	// aAPPANAGE_FAR2
    "所有",	// aGROUP_ALL
    "自身",	// MYSELF
    "除自身以外所有隊員",	// GROUP_ALL_NOMYSELF
    "除自身以外所有隊員",	// pGROUP_ALL_NOMYSELF
    "除自身以外所有隊員",	// oGROUP_ALL_NOMYSELF
    "除自身以外所有隊員",	// aGROUP_ALL_NOMYSELF
    "血量比例由低至高{0}名",	// HP_LOWRATE
    "血量比例由低至高{0}名",	// pHP_LOWRATE
    "血量比例由低至高{0}名",	// oHP_LOWRATE
    "血量比例由低至高{0}名",	// aHP_LOWRATE
    "血量比例由高至低{0}名",	// HP_HIGHTRATE
    "血量比例由高至低{0}名",	// pHP_HIGHTRATE
    "血量比例由高至低{0}名",	// oHP_HIGHTRATE
    "血量比例由高至低{0}名",    // aHP_HIGHTRATE
]

BattlegroundIDText = {
    1: "平原",
    10: "異空間",
    100: "砂浜",
    101: "船上",
    102: "海中",
    103: "船上夜",
    104: "砂浜夜",
    105: "船上",
    106: "高地",
    107: "監獄外",
    108: "監獄外",
    109: "監獄外",
    11: "城壁前",
    110: "監獄内",
    111: "湿地",
    112: "薄命砦",
    113: "荒地",
    114: "森林夜",
    115: "街中",
    116: "街中",
    117: "街中",
    118: "城中",
    119: "荒涼地",
    12: "荒地",
    120: "ほこら",
    121: "荒涼地",
    122: "森林",
    123: "城中",
    124: "船上",
    125: "異空間",
    126: "黒の大地",
    127: "？？？",
    128: "？？？",
    13: "平原夜",
    14: "戦場夜",
    15: "戦場",
    2: "森林",
    3: "雪山",
    4: "砂漠",
    400: "街中夜",
    401: "祭り夜",
    402: "祭り夜",
    403: "祭り昼",
    404: "学園",
    405: "森林",
    406: "平原",
    5: "戦場",
    6: "洞窟",
    7: "遺跡",
    78: "街中夜",
    8: "城中",
    9: "街中",
    81: "雨の砂漠",
};

HomeIDText = {
    0: "",
    1: "義勇軍",
    2: "魔神",
    3: "旅人",
    4: "副都",
    5: "聖都",
    6: "賢者の塔",
    7: "迷宮山脈",
    8: "湖都",
    9: "精霊島",
    10: "九領",
    11: "海風の港",
    12: "大海",
    13: "レムレス",
    14: "ケ者の大陸",
    15: "罪の大陸",
    16: "薄命の大陸",
    17: "鉄煙の大陸",
    18: "年代記の大陸",
    19: "レムレス島",
    20: "華撃団",
};

function HomeIDString(id) {
    var ret = HomeIDText[id];
    if (typeof(ret) == "undefined" || ret == null) {
        return "";
    } else {
        return ret;
    }
}

AttackTypeFlag = [
    "貫通",
    "火屬性",
    "冰屬性",
    "麻痺",
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
    
    "衰弱",
    "CANCEL",
    "破盾",
    "MINIMUM",
    "MAXIMUM",
    
    "擊殺貫通",
    "破盾",
    "斬",
    "打",
    "突",
    
    "弓",
    "魔",
    "聖",
    "拳",
    "銃",
    
    "狙",
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

function AttackTypeFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<AttackTypeFlag.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (AttackTypeFlag[i] != "") {
                if (outputString == "") {
                    outputString = AttackTypeFlag[i];
                } else {
                    outputString += "、" + AttackTypeFlag[i];
                }
            }
        }
    }
    return outputString;
}

AttackTypeNoElementFlag = [
    "貫通",
    "",
    "",
    "麻痺",
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
    
    "衰弱",
    "CANCEL",
    "破盾",
    "MINIMUM",
    "MAXIMUM",
    
    "擊殺貫通",
    "破盾",
    "斬",
    "打",
    "突",
    
    "弓",
    "魔",
    "聖",
    "拳",
    "銃",
    
    "狙",
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

function AttackTypeNoElementFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<AttackTypeFlag.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (AttackTypeFlag[i] != "") {
                if (outputString == "") {
                    outputString = AttackTypeFlag[i];
                } else {
                    outputString += "、" + AttackTypeFlag[i];
                }
            }
        }
    }
    return outputString;
}

DebuffFlag = [
    "",
    "",
    "",
    "麻痺",
    "暈",
    
    "冰凍",
    "毒",
    "緩",
    "隱形",
    "",
    
    "",
    "白骨化",
    "黑暗",
    "封技",
    "詛咒",
    
    "衰弱",
    "",
    "破盾",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    ""
];

function DebuffFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<DebuffFlag.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (DebuffFlag[i] != "") {
                if (outputString == "") {
                    outputString = DebuffFlag[i];
                } else {
                    outputString += "、" + DebuffFlag[i];
                }
            }
        }
    }
    return outputString;
}

HealFlag = [
    "",
    "",
    "",
    "解除麻痺",
    "解除暈",
    
    "解除冰凍",
    "解除毒",
    "解除緩",
    "隱形",
    "",
    
    "",
    "解除白骨化",
    "解除黑暗",
    "解除封技",
    "解除詛咒",
    
    "解除衰弱",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "超量治療",
    "",
    "",
    "",
    "",
    
    "",
    "",
    ""
];

function HealFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<HealFlag.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (HealFlag[i] != "") {
                if (outputString == "") {
                    outputString = HealFlag[i];
                } else {
                    outputString += "、" + HealFlag[i];
                }
            }
        }
    }
    return outputString;
}

WeaponFlag = [
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "斬",
    "打",
    "突",
    
    "弓",
    "魔",
    "聖",
    "拳",
    "銃",
    
    "狙",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    ""
];

function WeaponFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<WeaponFlag.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (WeaponFlag[i] != "") {
                if (outputString == "") {
                    outputString = WeaponFlag[i];
                } else {
                    outputString += "、" + WeaponFlag[i];
                }
            }
        }
    }
    return outputString;
}

SkillPatternFlagText = [
    "變身",
    "無變身",
    "超必殺滿",
    "超必殺未滿",
];

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

BattlegroundFlagText = [
    "",
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
    
    "砂浜/船上/海中",
    "監獄内",
    "湿地",
    "異空間",
    "雨の砂漠",
];

function BattlegroundFlagString(flag) {
    var base2 = flag.toString(2);
    var outputString = "";
    for (var i=0 ; i<BattlegroundFlagText.length && i<base2.length ; i++) {
        if (base2[base2.length-i-1] == '1') {
            if (outputString == "") {
                outputString = BattlegroundFlagText[i];
            } else {
                outputString += "、" + BattlegroundFlagText[i];
            }
        }
    }
    if (outputString != "") {
        outputString = "在" + outputString + "時";
    }
    return outputString;
}

RaceText = [
	"",
	"人類",
	"骷髏",
	"黑軍",
	"哥布林",
	"樹人",
	"Boss",
	"鬼",
	"蜥蝪人",
	"龍",
	"石像",
	"巨人",
	"野獸",
	"Gel",
	"鬼魂",
	"魚人",
	"Clione",
	"螃蟹",
	"Kraken",
	"Metal",
	"昆蟲",
	"鳥",
	"Giantbird",
	"翼龍",
	"野豬",
	"狼",
	"Deamon",
	"Dangan",
	"蝙蝠",
	"青蛙",
	"Slime",
];