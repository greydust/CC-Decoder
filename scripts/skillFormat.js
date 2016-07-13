function SkillFormat(skillID, skillParams, skillFlag, iParams) {
    switch(skillID) {
        case 0x4c: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], FindType[skillParams[3]], TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], 8 * skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x56: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var debuff2String = DebuffFlagString(skillFlag[1]);
            if (debuff2String != "") {
                debuff2String = ("，{0:1p}%機率附帶" + debuff2String + "效果").format(skillParams[9]);
            }
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], FindType[skillParams[3]], TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], 8 * skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, debuff2String, attackTypeString);
        }
        case 0x1a: 
        case 0x19: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並增加" + attackTypeString;
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerBuffString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], jobString, attackTypeString);
        }
        case 4: 
        case 3:
        case 2:
        case 0x1d:
        case 80:
        case 0:
        case 0x31:
        case 5: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x26: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x16: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 1:
        case 7:
        case 0x2c: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3]+1, skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 70:
        case 0x2b:
        case 6: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x35: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x4d: {
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
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], param4String, param5String, skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
        }
        case 0x5c: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var debuffString2 = AttackDebuffString(skillFlag[1]);
            var attackTypeString2 = AttackTypeFlagString(skillFlag[1]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerString(skillParams[5]), PushPowerString(skillParams[6]), skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, skillParams[1]+skillParams[2]*skillParams[4], debuffString2, attackTypeString2);
        }
        case 0x33: {
            var width = Math.abs(parseInt((skillParams[2] / 10000) % 100) * 0.1);
            var height = Math.abs(parseInt((skillParams[2] / 100) % 100) * 0.1);
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
                damageString = "每{0}秒受到{1}倍傷害，".format(skillParams[0], skillParams[1]);
            }
            var plusDamageString = "";
            if (skillParams[5] > 0) {
                plusDamageString = "傷害增加{0:1p}%，".format(skillParams[5]);
            }
            var plusDamagedString = "";
            if (skillParams[6] > 0) {
                plusDamagedString = "受傷增加{0:1p}%，".format(skillParams[6]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], height, width, targetString, damageString, plusDamageString, plusDamagedString);
        }
        case 0x13: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x5b: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1]*10, skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);            
        }
        case 20: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x4a: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var radius = parseInt(skillParams[2]/100)  / 10;
            var xShift = parseInt(skillParams[2]%100) / 10;
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, xShift, radius);
        }
        case 0x58: {
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], TargetType[skillParams[3]], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
        }
        case 0x21: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var rangeString = "";
            if (skillParams[4] <= 1 && skillParams[5] <=1) {
                rangeString = "半徑{0}單位內".format(skillParams[2]);
            } else {
                var width = skillParams[4] > 1 ? skillParams[4] : 1;
                var height = skillParams[5] > 1 ? skillParams[5] : 1;
                rangeString = "高{0}單位，寬{1}單位內".format(height*skillParams[2], width*skillParams[2])
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, rangeString);
        }
        case 0x42: {
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
        case 11:
        case 10: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[3]);
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], healString, jobString);
        }
        case 0x20:
        case 0x1f: 
        case 0x2e:
        case 0x1c:
        case 0x10: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, skillParams[5]);
            }
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], healString, jobString);            
        }
        case 12:
        case 13:
        case 14: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerBuffString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], jobString);
        }
        case 0x4b: {
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
                buffString += "{0:1p}%攻擊，{1:1p}%減傷，{2:1p}%移動速度，{3:1p}%爆擊率，{4:1p}%攻速，持續{5}秒";
                buffString = buffString.format(skillParams[1], skillParams[3], skillParams[2], skillParams[5], skillParams[6], skillParams[4]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], healString, buffString);
        }
         case 0x45: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var radius = Math.abs(parseInt((skillParams[5] / 100) % 100) * 0.1);
            var front = Math.abs(parseInt(skillParams[5] % 100) * 0.1);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], PushPowerString(skillParams[6]), skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, front, radius);
         }
        case 0x4e: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var spreadAttackString = "";
            if (skillParams[6] > 0 && skillParams[7] > 0) {
                spreadAttackString = "，並造成半徑{0}內的其他敵人{1}倍{3}傷害{2}{4}".format(skillParams[6], skillParams[7], PushPowerString(skillParams[5]), debuffString, attackTypeString);
            }
            var maxAttackString = "";
            if (skillParams[2] > 0) {
                maxAttackString = "（最多{0}次攻擊）".format(skillParams[2]);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], PushPowerString(skillParams[5]), skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, spreadAttackString, maxAttackString);
        }
        case 0x18: 
        case 0x17: {
            var debuffString = DebuffFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString);
        }
        case 0x43: {
            var debuffString = AttackDebuffString(skillFlag[0]);
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
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3]+1, skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, rangeString);
        }
        case 0x44: {
            var hp5String = "";
            if (skillParams[6] != 0) {
                hp5String = "，每5秒回復{0:1p}%最大HP".format(skillParams[6]);
            }
            var killNumber = skillParams[5] % 1000;
            var returnMana = parseInt(skillParams[5] / 1000) % 10;
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1]-1, 1-skillParams[2], skillParams[3]-1, skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], -skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], hp5String, killNumber, returnMana);
        }
        case 0x49: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var radius = parseInt(skillParams[0] / 100) / 10;
            var front = parseInt(skillParams[0] % 100) / 10;
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, front, radius);
        }
        case 0x34: {
            return SkillDatas[skillID].detailDescription.format(PCommandString(skillParams[0]), PCommandString(skillParams[1]), PCommandString(skillParams[2]), PCommandString(skillParams[3]), PCommandString(skillParams[4]), PCommandString(skillParams[5]), PCommandString(skillParams[6]), PCommandString(skillParams[7]), PCommandString(skillParams[8]), PCommandString(skillParams[9]), skillFlag[0], skillFlag[1], iParams[0], iParams[1]);
        }
        case 0x40: {
            var jobString = JobFlagString(iParams[0], "、");
            if (jobString != "") {
                jobString = jobString + "職";
            }
            flagHealString = "";
            debuffString = DebuffFlagString(skillFlag[1]);
            if (debuffString != "") {
                flagHealString = "，當受到" + debuffString + "傷害時改為治療" + skillParams[4] + "倍治療";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], TargetType[skillParams[3]], jobString, flagHealString);
        }
        case 0x1b: {
            var healString = "";
            var healFlagString = HealFlagString(skillFlag[0]);
            if (healFlagString != "") {
                healString = "，並{0}".format(healFlagString);
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], healString);
        }
        case 0x48: {
            var front = parseInt(skillParams[3] % 100) / 10;
            var radius = parseInt(skillParams[3] / 100) / 10;
            var searchFront = parseInt(skillParams[2] % 100) / 10;
            var searchRadius = parseInt(skillParams[2] / 100) / 10;
            var debuffString = DebuffFlagString(skillFlag[0]);
            if (debuffString != "") {
                debuffString = "，並" + debuffString + "目標";
            }
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
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], PushPowerString(skillParams[7]), skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, searchFront, searchRadius, radius, timeLimitString, triggerString);
        }
        case 0x52: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3]-1, PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, skillParams[1]*skillParams[2]);
        }
        case 0x22: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var width = 1.5;
            if (skillParams[4] > 0) {
                width = skillParams[4];
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), width, skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 50: {
            var debuffString = AttackDebuffString(skillFlag[0]);
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
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), TargetType[skillParams[4]], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, jobString, healFlagString);
        }
        case 0x37: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            var followString = "";
            if (skillParams[2] == 0) {
                followString = "，並跟隨施法者移動";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, followString);
        }
        case 0x4f: {
            var debuffString = AttackDebuffString(skillFlag[0]);
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
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], PushPowerString(skillParams[3]), skillParams[4], skillParams[5], skillParams[6], skillParams[7], PushPowerString(skillParams[8]), skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, bombRangeString, bombDamageRange, bombDamageString, bombTeamString);
        }
        case 0x27: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, skillParams[2]*1.5, PushPowerString(1.5));
        }
        case 0x2f: {
            var debuffString = AttackDebuffString(skillFlag[0]);
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
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], skillParams[2], skillParams[3], PushPowerString(skillParams[4]), skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString, bombRangeString, bombDamageRange, bombDamageString);
        }
        case 0x3a: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], TargetType[skillParams[2]], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x54: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0]+1, skillParams[1], skillParams[2], skillParams[3], skillParams[4], skillParams[5], PushPowerString(skillParams[6]), skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x23: {
            var debuffString = AttackDebuffString(skillFlag[0]);
            var attackTypeString = AttackTypeFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], FieldBitAreaString(skillParams[2]), PushPowerString(skillParams[3]), skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString, attackTypeString);
        }
        case 0x24: {
            var teamMateString = "";
            if (skillParams[2] != "") {
                teamMateString = "及隊友";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], skillParams[1], teamMateString, skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1]);       
        }
        case 0x57: {
            var front = (parseInt(skillParams[9]) % 100) / 10;
            var width = (parseInt(skillParams[9] / 10000) % 100) / 10;
            var height = (parseInt(skillParams[9] / 100) % 100) / 10;
            var supportPowerUpString = PowerUpFlag[skillParams[5]];
            if (supportPowerUpString != "") {
                supportPowerUpString = "並獲得" + supportPowerUpString + "效果";
            }
            return SkillDatas[skillID].detailDescription.format(skillParams[0], parseInt(skillParams[1]*1000) / 10, skillParams[2]*100, skillParams[3]*100, skillParams[4]*100, skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], front, width, height, skillParams[8]+1, supportPowerUpString);   
        }
        case 0x38: {
            var debuffString = DebuffFlagString(skillFlag[0]);
            return SkillDatas[skillID].detailDescription.format(skillParams[0], TargetType[skillParams[1]], skillParams[2], skillParams[3], skillParams[4], skillParams[5], skillParams[6], skillParams[7], skillParams[8], skillParams[9], skillFlag[0], skillFlag[1], iParams[0], iParams[1], debuffString);
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
        case 0x57: {
            var debuffString = PassiveDebuffString(passiveFlag[0]);
            var jobString = "";
            if (passiveParams[3] == 0) {
                jobString = JobFlagString(iParams[0], "或");
            } else {
                jobString = JobFlagString(iParams[0], "且");
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], debuffString, jobString);
        }
        case 0x58: {
            var debuffString = PassiveHealDebuffString(passiveFlag[0]);
            var jobString = "";
            if (passiveParams[3] == 0) {
                jobString = JobFlagString(iParams[0], "或");
            } else {
                jobString = JobFlagString(iParams[0], "且");
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], debuffString, jobString);
        }
        case 10:
        case 11:
        case 0x26: {
            var debuffString = PassiveDebuffString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], debuffString);
        }
        case 0x2d: {
            var debuffString = PassiveHealDebuffString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], PushPowerAddString(passiveParams[1]), passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], debuffString);
        }
        case 0x44: {
            var jobString = JobFlagString(iParams[0], "或");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString);
        }
        case 0x30: {
            var magicDamageString = "";
            if (passiveParams[2] != passiveParams[0]) {
                magicDamageString = "受到魔法攻擊時則為" + passiveParams[2] + "倍";
            }
            var magicSpeedString = "";
            if (passiveParams[3] != passiveParams[1]) {
                magicSpeedString = "受到魔法攻擊時則為" + passiveParams[3] + "單位";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], magicDamageString, magicSpeedString, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
        }
        case 0x3f: {
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(1 - passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], attackTypeString);
        }
        case 0x19: {
            return PassiveDatas[passiveID].detailDescription.format(0.4 - passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
        }
        case 0x17: {
            var criticalString = "";
            if (passiveParams[3] <= 0) {
                criticalString = "未暴擊";
            }
            var debuffString = AttackDebuffString(passiveFlag[0]);
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], 1 - passiveParams[2], criticalString, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], debuffString, attackTypeString);
        }
        case 0x47: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], conditionString);
        }
        case 0x1c: {
            var battleGroundString = "";
            if (passiveParams[6] > 0 || passiveParams[7] > 0 || passiveParams[8] > 0){
                var flag = (passiveParams[6] <= 0 ? 0 : 1 << passiveParams[6]) | (passiveParams[7] <= 0 ? 0 : 1 << passiveParams[7]) | (passiveParams[8] <= 0 ? 0 : 1 << passiveParams[8]);
                battleGroundString = "，" + BattlegroundFlagString(flag) + "再額外增加{0:1p}%、{1:1p}%、{2:1p}%".format(passiveParams[3], passiveParams[4], passiveParams[5])
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], battleGroundString);
        }
        case 0x1d: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0] - 1, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
        }
        case 0x34: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1]-1, passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);            
        }
        case 0x33: {
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並使攻擊附帶" + attackTypeString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], attackTypeString);            
        }
        case 0x3f2: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], bgString, jobString);
        }
        case 0x3f3: {
            var jobString = JobFlagString(iParams[0], "");
            if (jobString == "") {
                jobString = "隨機";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString);            
        }
        case 0x3f5: {
            var moveRequirementString = "";
            if (passiveParams[8] != 0) {
                moveRequirementString = "且不攻擊";
            }
            attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，疊滿時附帶" + attackTypeString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], -passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], moveRequirementString, passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], attackTypeString);
        }
        case 0x3f8: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], -passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);            
        }
        case 0x4f: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1]==0 ? 0 : passiveParams[1]-1, passiveParams[2]==0 ? 0 : passiveParams[2]-1, passiveParams[3]==0 ? 0 : passiveParams[3]-1, passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], targetString, debuffString);
        }
        case 0x53: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], -passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], targetString, debuffString);
        }
        case 0x20:
        case 0x22: {
            var debuffString = DebuffFlagString(passiveFlag[0]);
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], -passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], debuffString);
        }
        case 6: {
            return PassiveDatas[passiveID].detailDescription.format(RaceText[parseInt(passiveParams[0])], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], bgString);
        }
        case 0x43: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], buffString);
        }
        case 80: {
            var jobString = "";
            if (passiveParams[6] == 0) {
                jobString = JobFlagString(iParams[0], "或"); 
            } else {
                jobString = JobFlagString(iParams[0], "及");                
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString);
        }
        case 0x60: {
            var jobString = "";
            if (passiveParams[0] == 0) {
                jobString = JobManaFlagString(32, "");
            } else {
                jobString = JobManaFlagString(iParams[0], "");
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString);
        }
        case 20: {
            var jobString = JobFlagString(iParams[0], "、") + "職";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString);
        }
        case 0x4b: {
            var weaponFlagString = WeaponFlagString(passiveFlag[0]);
            var selfString = passiveParams[0] == 0 ? "自己除外的" : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], weaponFlagString, selfString);
        }
        case 0x4c: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], buffString);
        }
        case 0x3f0: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], bgString);
        }
        case 0x3f1: {
            var targetString = "";
            if (passiveParams[0] == 1) {
                targetString = "自身";
            } else if (passiveParams[0] == 3) {
                targetString = "其他隊友";
            } else {
                targetString = "全體";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6]*2, passiveParams[7]*3, passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], targetString);
        }
        case 0x3f9: {
            var jobString = JobFlagString(iParams[0], "、") + "職";
            var selfString = passiveParams[0] == 0 ? "自己除外的" : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString, selfString);
        }
        case 0x54:
        case 0x69: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], targetString);
        }
        case 0x12: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], buffString);
        }
        case 0x2f: {
            var jobString = JobFlagString(iParams[0], "、");
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], jobString);
        }
        case 0x3ed:
        case 0x3eb: {
            var attackTypeString = AttackTypeFlagString(passiveFlag[0]);
            if (attackTypeString != "") {
                attackTypeString = "，並帶" + attackTypeString;
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], attackTypeString);
        }
        case 0x3a: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
        }
        case 0x3e8: {
            var healString = HealFlagString(passiveFlag[0]);
            if (healString != "") {
                healString = ("當持有的法力珠≧{0:d}顆時普通治療可以" + healString + "，").format(passiveParams[0]);
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], healString);
        }
        case 0x3f7: {
            return PassiveDatas[passiveID].detailDescription.format(PowerUpFlag[passiveParams[0]], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);            
        }
        case 0x13: {
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
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], healRangeString);
        }
        case 0x48: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0]-3.5, passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);            
        }
        case 0x63: {
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], -passiveParams[6], -passiveParams[7], -passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
        }
        case 0x3ee: {
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
            } else if (target3 == 3) {
                target2String = "其他隊友";
            }
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], target1String, target2String);
        }
        case 0x3ef: {
            var targetString = "";
            if (passiveParams[0] == 1) {
                targetString = "自身";
            } else if (passiveParams[0] == 2) {
                targetString = "全體";
            } else if (passiveParams[0] == 3) {
                targetString = "其他隊友";
            }
            return PassiveDatas[passiveID].detailDescription.format(targetString, passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
        }
        case 0x5b: {
            var targetString = passiveParams[5] == 1 ? "自身" : "隊伍";
            var healString = "";
            var healFlagString = HealFlagString(passiveFlag[1]);
            if (healFlagString != "") {
                healString = "，並{0}，如果解除狀態則免疫該狀態{1}秒".format(healFlagString, passiveParams[9]);
            }
            var triggerString = passiveParams[6] >= 0 ? "，最多觸發{0:d}次".format(passiveParams[6]) : "";
            var timeString = passiveParams[7] > 0 ? "，持續{0:3f}秒".format(passiveParams[7]) : "";
            return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], -passiveParams[3], passiveParams[4], targetString, triggerString, timeString, passiveParams[8], passiveParams[9], healString, passiveFlag[1], iParams[0]);
        }
        default: {
            if (typeof(PassiveDatas[passiveID]) == "undefined" || PassiveDatas[passiveID] == null) {
                return PassiveDatas[0xaaaa].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0], passiveID);
            } else {
                return PassiveDatas[passiveID].detailDescription.format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9], passiveFlag[0], passiveFlag[1], iParams[0]);
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
    "HP_LOW",	// HP_LOW
    "血量由高至低",	// HP_HIGHT
    "HPMAX_LOW",	// HPMAX_LOW
    "HPMAX_HIGHT",	// HPMAX_HIGHT
    "ATK_LOW",	// ATK_LOW
    "ATK_HIGHT",	// ATK_HIGHT
    "LEVEL_LOW",	// LEVEL_LOW
    "LEVEL_HIGHT",	// LEVEL_HIGHT
    "DISTANCE_LOW",	// DISTANCE_LOW
    "依遠到近",	// DISTANCE_HIGHT
    "APPANAGE_NEAR",	// APPANAGE_NEAR
    "APPANAGE_FAR",	// APPANAGE_FAR
    "由後到前",	// APPANAGE_NEAR2
    "由前到後",	// APPANAGE_FAR2
    "所有",	// GROUP_ALL
    "pRANDOM",	// pRANDOM
    "pHP_LOW",	// pHP_LOW
    "血量由高至低",	// pHP_HIGHT
    "pHPMAX_LOW",	// pHPMAX_LOW
    "pHPMAX_HIGHT",	// pHPMAX_HIGHT
    "pATK_LOW",	// pATK_LOW
    "pATK_HIGHT",	// pATK_HIGHT
    "pLEVEL_LOW",	// pLEVEL_LOW
    "pLEVEL_HIGHT",	// pLEVEL_HIGHT
    "pDISTANCE_LOW",	// pDISTANCE_LOW
    "依遠到近",	// pDISTANCE_HIGHT
    "pAPPANAGE_NEAR",	// pAPPANAGE_NEAR
    "pAPPANAGE_FAR",	// pAPPANAGE_FAR
    "由後到前",	// pAPPANAGE_NEAR2
    "由前到後",	// pAPPANAGE_FAR2
    "所有",	// pGROUP_ALL
    "隨機",	// oRANDOM
    "oHP_LOW",	// oHP_LOW
    "血量由高至低",	// oHP_HIGHT
    "oHPMAX_LOW",	// oHPMAX_LOW
    "oHPMAX_HIGHT",	// oHPMAX_HIGHT
    "oATK_LOW",	// oATK_LOW
    "oATK_HIGHT",	// oATK_HIGHT
    "oLEVEL_LOW",	// oLEVEL_LOW
    "oLEVEL_HIGHT",	// oLEVEL_HIGHT
    "oDISTANCE_LOW",	// oDISTANCE_LOW
    "依遠到近",	// oDISTANCE_HIGHT
    "oAPPANAGE_NEAR",	// oAPPANAGE_NEAR
    "oAPPANAGE_FAR",	// oAPPANAGE_FAR
    "由後到前",	// oAPPANAGE_NEAR2
    "由前到後",	// oAPPANAGE_FAR2
    "所有",	// oGROUP_ALL
    "aRANDOM",	// aRANDOM
    "aHP_LOW",	// aHP_LOW
    "血量由高至低",	// aHP_HIGHT
    "aHPMAX_LOW",	// aHPMAX_LOW
    "aHPMAX_HIGHT",	// aHPMAX_HIGHT
    "aATK_LOW",	// aATK_LOW
    "aATK_HIGHT",	// aATK_HIGHT
    "aLEVEL_LOW",	// aLEVEL_LOW
    "aLEVEL_HIGHT",	// aLEVEL_HIGHT
    "aDISTANCE_LOW",	// aDISTANCE_LOW
    "依遠到近",	// aDISTANCE_HIGHT
    "aAPPANAGE_NEAR",	// aAPPANAGE_NEAR
    "aAPPANAGE_FAR",	// aAPPANAGE_FAR
    "由後到前",	// aAPPANAGE_NEAR2
    "由前到後",	// aAPPANAGE_FAR2
    "所有",	// aGROUP_ALL
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
};

HomeIDText = {
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
};

function HomeIDString(id) {
    var ret = HomeIDText[id];
    if (typeof(ret) == "undefined" || ret == null) {
        return "";
    } else {
        return ret;
    }
}

SkillFlag = [
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

AttackTypeFlag = [
    "貫通",
    "火屬性",
    "冰屬性",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "魔法",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    
    "穿透",
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
	"Shadow",
	"哥布林",
	"樹人",
	"Boss",
	"鬼",
	"Lizard",
	"龍",
	"石像",
	"巨人",
	"野獸",
	"Gel",
	"鬼魂",
	"蜥蝪人",
	"Clione",
	"螃蟹",
	"Kraken",
	"Metal",
	"Butterfly",
	"Bird",
	"Giantbird",
	"Wyvern",
	"野豬",
	"狼",
	"Deamon",
	"Dangan",
	"蝙蝠",
	"青蛙",
	"Slime",
];