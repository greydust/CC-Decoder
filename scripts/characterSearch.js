var searchButton = document.getElementById("searchCharacterButton");
var characterName = document.getElementById("characterName");
var searchButton = document.getElementById("searchCharacterButton");
var resultText = document.getElementById("resultText");
var characterDataTable = document.getElementById("characterDataTable");
var serverSelect = document.getElementById("serverSelect");
var skillPopup = document.getElementById("skillPopup");
var passivePopup = document.getElementById("passivePopup");

searchButton.addEventListener("click", SearchCharacter, false);
serverSelect.addEventListener("change", ChangeServer, false)

function ChangeServer() {
    if (serverSelect.value == "JP") {
        characterDataTable.tBodies[0].innerHTML = "";
        InitializeJP();
    } else if (serverSelect.value == "TW") {
        characterDataTable.tBodies[0].innerHTML = "";
        InitializeTW();
    }
}

function NullableNumber(n) {
    if (typeof(n) == "undefined" || n == null) {
        return 0;
    } else {
        return n;
    }
}

function NullableString(s) {
    if (typeof(s) == "undefined" || s == null) {
        return "";
    } else {
        return s;
    }
}

function MergeSkillFlag(flag0, flag1) {
    return (NullableNumber(flag0) & 0xffffffff) + (NullableNumber(flag1) << 0x20);
}

function SkillDetailText(cellToWrite, skillType, skillParams, skillFlag, iParams) {
    var outputString = "";

    outputString += SkillFormat(skillType, skillParams, skillFlag, iParams);
    cellToWrite.innerHTML = outputString;
    
    cellToWrite.parentNode.addEventListener("mouseover", function(e) {
        skillPopup.style.display = "block";
        
        skillPopup.getElementsByTagName("p")[0].innerHTML = "類別: " + SkillDatas[skillType].typeName;
        var paramDescriptions = SkillDatas[skillType].parameterDescription;
        for (var i=0 ; i<5; i++) {
            for (var j=0 ; j<2 ; j++) {
                skillPopup.getElementsByTagName("table")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = paramDescriptions[i*2+j] + ": " + skillParams[i*2+j];
            }
        }
        var flagDescriptions = SkillDatas[skillType].flagDescription;
        for (var i=0 ; i<1; i++) {
            for (var j=0 ; j<2 ; j++) {
                skillPopup.getElementsByTagName("table")[1].getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = flagDescriptions[i*2+j] + ": " + skillFlag[i*2+j];
            }
        }
        var iParamDescriptions = SkillDatas[skillType].iParameterDescription;
        for (var i=0 ; i<1; i++) {
            for (var j=0 ; j<2 ; j++) {
                skillPopup.getElementsByTagName("table")[2].getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = iParamDescriptions[i*2+j] + ": " + iParams[i*2+j];
            }
        }
        
        var clientWidth = GetClientWidth();
        var clientHeight = GetClientHeight();
        var height = skillPopup.clientHeight;
        var width = skillPopup.clientWidth;
        var xOffset = e.pageX + width + 5 <= clientWidth ? 5 : -width-5;
        var yOffset = e.pageY + height + 5 <= clientHeight ? 5 : -height-5;
        skillPopup.style.left = (e.pageX+xOffset) + "px";
        skillPopup.style.top = (e.pageY+yOffset) + "px";
    });
    cellToWrite.parentNode.addEventListener("mousemove", function(e) {
        var clientWidth = GetClientWidth();
        var clientHeight = GetClientHeight();
        var height = skillPopup.clientHeight;
        var width = skillPopup.clientWidth;
        var xOffset = e.pageX + width + 5 <= clientWidth ? 5 : -width-5;
        var yOffset = e.pageY + height + 5 <= clientHeight ? 5 : -height-5;
        skillPopup.style.left = (e.pageX+xOffset) + "px";
        skillPopup.style.top = (e.pageY+yOffset) + "px";
    });
    cellToWrite.parentNode.addEventListener("mouseout", function(e){
        skillPopup.style.display = "none";        
    });    
}

function SkillPatternText(patternID, skillCost, cellToWrite) {
    var patternCell = document.createElement("div");
    patternCell.className = "skillDetail";
    cellToWrite.appendChild(patternCell);
    
    currentDB.database().ref('/bosspattern/bosspattern/' + patternID).once('value').then(function(patternDataSnapshot) {
        try {
            patternData = patternDataSnapshot.val();

            var patternCost = patternData.scost;
            if (patternCost == 0) {
                patternCost = skillCost;
            }                            
            patternCell.innerHTML += "耗珠: " + patternCost + "<br>";
            
            var conditionString = "";
            // condition
            if (patternData.che > 0) {
                conditionString += " Chain數≦" + patternData.che;
            }
            if (patternData.chs > 0) {
                conditionString += " Chain數≧" + patternData.chs;
            }
            if (patternData.flag > 0) {
                conditionString += " " + SkillPatternFlagString(patternData.flag);
            }
            if (patternData.bgf > 0) {
                conditionString += " " + BattlegroundFlagString(patternData.bgf);
            }
            if (patternData.hpend < 100.0) {
                conditionString += " 血量少於" + patternData.hpend + "%";
            }
            if (patternData.hpstart > 0.0) {
                conditionString += " 血量高於" + patternData.hpstart + "%";
            }
            if (patternData.posp > 0.0) {
                conditionString += " 處在最右方" + patternData.posp + "單位";                    
            }
            if (patternData.pose > 0.0) {
                conditionString += " 處在最左方" + patternData.pose + "單位";                    
            }
            if (patternData.limit > 0) {
                conditionString += " 最初" + patternData.limit + "回";
            }
            if (patternData.mns > 0) {
                conditionString += " 施放後法力球≧" + patternData.mns;
            }
            if (patternData.mne > 0 && patternData.mne < 8) {
                 conditionString += " 施放後法力球≦" + patternData.mne;
           }
            
            if (conditionString == "") {
                conditionString = "無條件";
            } else {
                conditionString = "當符合以下條件: " + conditionString;
            }
            
            patternCell.innerHTML += conditionString;

            if (patternData.skillid0 != 0) {
                var patternSkillCell0 = document.createElement("div");
                patternSkillCell0.className = "indent1";
                patternCell.appendChild(patternSkillCell0);
                
                currentDB.database().ref('/bossskill/bossskill/' + patternData.skillid0).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell0, skillData.skillid0,
                            [NullableNumber(skillData.skillparam0), NullableNumber(skillData.skillparam1), NullableNumber(skillData.skillparam2), NullableNumber(skillData.skillparam3), NullableNumber(skillData.skillparam4), NullableNumber(skillData.skillparam5), NullableNumber(skillData.skillparam6), NullableNumber(skillData.skillparam7), NullableNumber(skillData.skillparam8), NullableNumber(skillData.skillparam9)],
                            [MergeSkillFlag(skillData.skillflag0_0, skillData.skillflag0_1), MergeSkillFlag(skillData.skillflag1_0, skillData.skillflag1_1)],
                            [NullableNumber(skillData.iparam0), NullableNumber(skillData.iparam1)]
                        );
                    } catch(e) {
                    }
                });
            }
            if (patternData.skillid1 != 0) {
                var patternSkillCell1 = document.createElement("div");
                patternSkillCell1.className = "indent1";
                patternCell.appendChild(patternSkillCell1);
                
               currentDB.database().ref('/bossskill/bossskill/' + patternData.skillid1).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell1, skillData.skillid0,
                            [NullableNumber(skillData.skillparam0), NullableNumber(skillData.skillparam1), NullableNumber(skillData.skillparam2), NullableNumber(skillData.skillparam3), NullableNumber(skillData.skillparam4), NullableNumber(skillData.skillparam5), NullableNumber(skillData.skillparam6), NullableNumber(skillData.skillparam7), NullableNumber(skillData.skillparam8), NullableNumber(skillData.skillparam9)],
                            [MergeSkillFlag(skillData.skillflag0_0, skillData.skillflag0_1), MergeSkillFlag(skillData.skillflag1_0, skillData.skillflag1_1)],
                            [NullableNumber(skillData.iparam0), NullableNumber(skillData.iparam1)]
                        );
                    } catch(e) {
                    }
                });
            }
            if (patternData.skillid2 != 0) {
                var patternSkillCell2 = document.createElement("div");
                patternSkillCell2.className = "indent1";
                patternCell.appendChild(patternSkillCell2);
                
                currentDB.database().ref('/bossskill/bossskill/' + patternData.skillid2).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell2, skillData.skillid0,
                            [NullableNumber(skillData.skillparam0), NullableNumber(skillData.skillparam1), NullableNumber(skillData.skillparam2), NullableNumber(skillData.skillparam3), NullableNumber(skillData.skillparam4), NullableNumber(skillData.skillparam5), NullableNumber(skillData.skillparam6), NullableNumber(skillData.skillparam7), NullableNumber(skillData.skillparam8), NullableNumber(skillData.skillparam9)],
                            [MergeSkillFlag(skillData.skillflag0_0, skillData.skillflag0_1), MergeSkillFlag(skillData.skillflag1_0, skillData.skillflag1_1)],
                            [NullableNumber(skillData.iparam0), NullableNumber(skillData.iparam1)]
                        );
                    } catch(e) {
                    }
                });
            }
            if (patternData.skillid3 != 0) {
                var patternSkillCell3 = document.createElement("div");
                patternSkillCell3.className = "indent1";
                patternCell.appendChild(patternSkillCell3);
                
                currentDB.database().ref('/bossskill/bossskill/' + patternData.skillid3).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell3, skillData.skillid0,
                            [NullableNumber(skillData.skillparam0), NullableNumber(skillData.skillparam1), NullableNumber(skillData.skillparam2), NullableNumber(skillData.skillparam3), NullableNumber(skillData.skillparam4), NullableNumber(skillData.skillparam5), NullableNumber(skillData.skillparam6), NullableNumber(skillData.skillparam7), NullableNumber(skillData.skillparam8), NullableNumber(skillData.skillparam9)], 
                            [MergeSkillFlag(skillData.skillflag0_0, skillData.skillflag0_1), MergeSkillFlag(skillData.skillflag1_0, skillData.skillflag1_1)],
                            [NullableNumber(skillData.iparam0), NullableNumber(skillData.iparam1)]
                        );
                    } catch(e) {
                    }
                });
            }
            if (patternData.skillid4 != 0) {
                var patternSkillCell4 = document.createElement("div");
                patternSkillCell4.className = "indent1";
                patternCell.appendChild(patternSkillCell4);
                
                currentDB.database().ref('/bossskill/bossskill/' + patternData.skillid4).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell3, skillData.skillid0,
                            [NullableNumber(skillData.skillparam0), NullableNumber(skillData.skillparam1), NullableNumber(skillData.skillparam2), NullableNumber(skillData.skillparam3), NullableNumber(skillData.skillparam4), NullableNumber(skillData.skillparam5), NullableNumber(skillData.skillparam6), NullableNumber(skillData.skillparam7), NullableNumber(skillData.skillparam8), NullableNumber(skillData.skillparam9)], 
                            [MergeSkillFlag(skillData.skillflag0_0, skillData.skillflag0_1), MergeSkillFlag(skillData.skillflag1_0, skillData.skillflag1_1)],
                            [NullableNumber(skillData.iparam0), NullableNumber(skillData.iparam1)]
                        );
                    } catch(e) {
                    }
                });
            }

        } catch(e) {
        }
    });
}

function SkillText(characterData, cellToWrite) {
    cellToWrite.innerHTML = "";
    cellToWrite.className = "skill";
    
    try {
        cellToWrite.innerHTML += NullableString(characterData.skilltext).replace("\\n", "");
        {
            var patternCell = cellToWrite.appendChild(document.createElement("div"));
            patternCell.className = "skillDetail";
            patternCell.innerHTML +=  "耗珠: " + characterData.skill_cost;
            
            var patternSkillCell0 = document.createElement("div");
            patternSkillCell0.className = "indent1";
            patternCell.appendChild(patternSkillCell0);

            var skillflag0;
            if (typeof(characterData.skillflag0_0) == "undefined" || characterData.skillflag0_0 == null) {
                skillflag0 = characterData.skillflag;
            } else {
                skillFlag0 = MergeSkillFlag(characterData.skillflag0_0, characterData.skillflag0_1);
            }
            SkillDetailText(patternSkillCell0, characterData.skillid[0],
                [NullableNumber(characterData.skillparam0), NullableNumber(characterData.skillparam1), NullableNumber(characterData.skillparam2), NullableNumber(characterData.skillparam3), NullableNumber(characterData.skillparam4), NullableNumber(characterData.skillparam5), NullableNumber(characterData.skillparam6), NullableNumber(characterData.skillparam7), NullableNumber(characterData.skillparam8), NullableNumber(characterData.skillparam9)],
                [skillFlag0, MergeSkillFlag(characterData.skillflag1_0, characterData.skillflag1_1)],
                [NullableNumber(characterData.iparam0), NullableNumber(characterData.iparam1)]
            );
        }
        {
            if(typeof(characterData.pattern0) != "undefined") {
                SkillPatternText(characterData.pattern0, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern1) != "undefined") {
                SkillPatternText(characterData.pattern1, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern2) != "undefined") {
                SkillPatternText(characterData.pattern2, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern3) != "undefined") {
                SkillPatternText(characterData.pattern3, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern4) != "undefined") {
                SkillPatternText(characterData.pattern4, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern5) != "undefined") {
                SkillPatternText(characterData.pattern5, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern6) != "undefined") {
                SkillPatternText(characterData.pattern6, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern7) != "undefined") {
                SkillPatternText(characterData.pattern7, characterData.skill_cost, cellToWrite);
            }
            if(typeof(characterData.pattern8) != "undefined") {
                SkillPatternText(characterData.pattern8, characterData.skill_cost, cellToWrite);
            }
        }
    } catch (e) {
        cellToWrite.innerHTML = "";
    }
}

function PassiveDetailText(cellToWrite, passiveType, passiveParams, passiveFlag, iParams) {
    var outputString = "";

    outputString += PassiveFormat(passiveType, passiveParams, passiveFlag, iParams);
    cellToWrite.innerHTML = outputString;

    cellToWrite.addEventListener("mouseover", function(e) {
        passivePopup.style.display = "block";
        
        passivePopup.getElementsByTagName("p")[0].innerHTML = "類別: " + PassiveDatas[passiveType].typeName;
        var paramDescriptions = PassiveDatas[passiveType].parameterDescription;
        for (var i=0 ; i<5; i++) {
            for (var j=0 ; j<2 ; j++) {
                passivePopup.getElementsByTagName("table")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = paramDescriptions[i*2+j] + ": " + passiveParams[i*2+j];
            }
        }
        var flagDescriptions = PassiveDatas[passiveType].flagDescription;
        for (var i=0 ; i<1; i++) {
            for (var j=0 ; j<2 ; j++) {
                passivePopup.getElementsByTagName("table")[1].getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = flagDescriptions[i*2+j] + ": " + passiveFlag[i*2+j];
            }
        }
        var iParamDescriptions = PassiveDatas[passiveType].iParameterDescription;
        for (var i=0 ; i<1; i++) {
            for (var j=0 ; j<2 ; j++) {
                passivePopup.getElementsByTagName("table")[2].getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = iParamDescriptions[i*2+j] + ": " + iParams[i*2+j];
            }
        }
        
        var clientWidth = GetClientWidth();
        var clientHeight = GetClientHeight();
        var height = passivePopup.clientHeight;
        var width = passivePopup.clientWidth;
        var xOffset = e.pageX + width + 5 <= clientWidth ? 5 : -width-5;
        var yOffset = e.pageY + height + 5 <= clientHeight ? 5 : -height-5;
        passivePopup.style.left = (e.pageX+xOffset) + "px";
        passivePopup.style.top = (e.pageY+yOffset) + "px";
    });
    cellToWrite.addEventListener("mousemove", function(e) {
        var clientWidth = GetClientWidth();
        var clientHeight = GetClientHeight();
        var height = passivePopup.clientHeight;
        var width = passivePopup.clientWidth;
        var xOffset = e.pageX + width + 5 <= clientWidth ? 5 : -width-5;
        var yOffset = e.pageY + height + 5 <= clientHeight ? 5 : -height-5;
        passivePopup.style.left = (e.pageX+xOffset) + "px";
        passivePopup.style.top = (e.pageY+yOffset) + "px";
    });
    cellToWrite.addEventListener("mouseout", function(e){
        passivePopup.style.display = "none";        
    });
}

function PassiveText(passiveSkillID, cellToWrite) {
    cellToWrite.innerHTML = "";
    cellToWrite.className = "passiveSkill";

    currentDB.database().ref('/skilllist/skilllist/' + passiveSkillID).once('value').then(function(passiveDataSnapshot) {
        try {
            passiveData = passiveDataSnapshot.val();
            
            cellToWrite.innerHTML += NullableString(passiveData.text).replace("\\n", "");;

            var passiveCell = document.createElement("div");
            passiveCell.className = "passivePattern";
            cellToWrite.appendChild(passiveCell);

            PassiveDetailText(passiveCell, passiveData.ability,
                [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)],
                [MergeSkillFlag(passiveData.flag0_0, passiveData.flag0_1), MergeSkillFlag(passiveData.flag1_0, passiveData.flag1_1)],
                [NullableNumber(passiveData.iParam0)]
            );
            for(var subID in passiveData.sub) {
                currentDB.database().ref('/skilllist/skilllist/' + passiveData.sub[subID]).once('value').then(function(subPassiveDataSnapshot) {
                    try {
                        subPassiveData = subPassiveDataSnapshot.val();

                        var subPassiveCell = document.createElement("div");
                        subPassiveCell.className = "passivePattern";
                        cellToWrite.appendChild(subPassiveCell);
                        
                        PassiveDetailText(subPassiveCell, subPassiveData.ability,
                            [NullableNumber(subPassiveData.param0), NullableNumber(subPassiveData.param1), NullableNumber(subPassiveData.param2), NullableNumber(subPassiveData.param3), NullableNumber(subPassiveData.param4), NullableNumber(subPassiveData.param5), NullableNumber(subPassiveData.param6), NullableNumber(subPassiveData.param7), NullableNumber(subPassiveData.param8), NullableNumber(subPassiveData.param9)],
                            [MergeSkillFlag(subPassiveData.flag0_0, subPassiveData.flag0_1), MergeSkillFlag(subPassiveData.flag1_0, subPassiveData.flag1_1)],
                            [NullableNumber(subPassiveData.iParam0)]
                        );
                    } catch(e) {
                    }
                });
            }
        } catch (e) {
            passiveCell.innerHTML = "";
        }
    });
}

function SupportText(supportCost, supportSkillID, supportSkillType, cellToWrite) {
    cellToWrite.innerHTML = "";
    cellToWrite.class = "supportSkill";

    currentDB.database().ref('/supporterskill/supporterskill/' + supportSkillID).once('value').then(function(supportDataSnapshot) {
        try {
            supportData = supportDataSnapshot.val();
            
            cellToWrite.innerHTML += NullableString(supportData.text).replace("\\n", "");
            cellToWrite.innerHTML += "<div>Cost: " + supportCost + "</div>";
            
            var typeCell = document.createElement("div");
            cellToWrite.appendChild(typeCell);

            currentDB.database().ref('/supporterskill/supporterskill/' + supportSkillType).once('value').then(function(supportTypeDataSnapshot) {
                try {
                    supportTypeData = supportTypeDataSnapshot.val();
                    
                    typeCell.innerHTML = "類型:" + supportTypeData.name;
                } catch(e) {
                }
            });
            
            if (NullableNumber(supportData.abi0) != 0) {
                currentDB.database().ref('/skilllist/skilllist/' + supportData.abi0).once('value').then(function(passiveDataSnapshot) {
                    try {
                        passiveData = passiveDataSnapshot.val();
                        
                        var passiveCell = document.createElement("div");
                        passiveCell.className = "passivePattern";
                        cellToWrite.appendChild(passiveCell);
                        
                        PassiveDetailText(passiveCell, passiveData.ability,
                            [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)],
                            [MergeSkillFlag(passiveData.flag0_0, passiveData.flag0_1), MergeSkillFlag(passiveData.flag1_0, passiveData.flag1_1)],
                            [NullableNumber(passiveData.iParam0)]
                        );
                    } catch(e) {
                    }
                });
            }
            if (NullableNumber(supportData.abi1) != 0) {
                currentDB.database().ref('/skilllist/skilllist/' + supportData.abi1).once('value').then(function(passiveDataSnapshot) {
                    try {
                        passiveData = passiveDataSnapshot.val();
                        
                        var passiveCell = document.createElement("div");
                        passiveCell.className = "passivePattern";
                        cellToWrite.appendChild(passiveCell);
                        
                        PassiveDetailText(passiveCell, passiveData.ability,
                            [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)],
                            [MergeSkillFlag(passiveData.flag0_0, passiveData.flag0_1), MergeSkillFlag(passiveData.flag1_0, passiveData.flag1_1)],
                            [NullableNumber(passiveData.iParam0)]
                        );
                    } catch(e) {
                    }
                });
            }
            if (NullableNumber(supportData.abi2) != 0) {
                currentDB.database().ref('/skilllist/skilllist/' + supportData.abi2).once('value').then(function(passiveDataSnapshot) {
                    try {
                        passiveData = passiveDataSnapshot.val();
                        
                        var passiveCell = document.createElement("div");
                        passiveCell.className = "passivePattern";
                        cellToWrite.appendChild(passiveCell);
                        
                        PassiveDetailText(passiveCell, passiveData.ability,
                            [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)],
                            [MergeSkillFlag(passiveData.flag0_0, passiveData.flag0_1), MergeSkillFlag(passiveData.flag1_0, passiveData.flag1_1)],
                            [NullableNumber(passiveData.iParam0)]
                        );
                    } catch(e) {
                    }
                });
            }
        } catch(e) {
            cellToWrite.innerHTML = "";
        }
    });
}

function SearchCharacter() {
    searchButton.disabled = true;
    characterDataTable.tBodies[0].innerHTML = "";
    
    currentDB.database().goOnline();
    currentDB.database().ref('/charainfo/charainfo').orderByChild("name").equalTo(characterName.value).once('value').then(function(dataSnapshot) {
        var n = dataSnapshot.numChildren();
        var charactersData = dataSnapshot.val();
        for (var characterData in charactersData) {
            var row = characterDataTable.tBodies[0].insertRow(-1);
            
            var nameCell = row.insertCell(-1);
            nameCell.class = "name";
            nameCell.innerHTML = NullableString(charactersData[characterData].title) + "<br>" + charactersData[characterData].name;
            
            row.insertCell(-1).innerHTML = charactersData[characterData].rarity;
            row.insertCell(-1).innerHTML = charactersData[characterData].cost;
            row.insertCell(-1).innerHTML = JobTypeText[NullableNumber(charactersData[characterData].jobtype)];
            row.insertCell(-1).innerHTML = charactersData[characterData].inihp;
            row.insertCell(-1).innerHTML = charactersData[characterData].iniap;
            SkillText(charactersData[characterData], row.insertCell(-1));
            PassiveText(charactersData[characterData].skillid[1], row.insertCell(-1));
            PassiveText(charactersData[characterData].skillid[2], row.insertCell(-1));
            SupportText(charactersData[characterData].sup_cost, charactersData[characterData].sup1, charactersData[characterData].sup2, row.insertCell(-1));
        }
        
        searchButton.disabled = false;
    });
}