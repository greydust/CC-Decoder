var searchButton = document.getElementById("searchCharacterButton");
var characterName = document.getElementById("characterName");
var searchButton = document.getElementById("searchCharacterButton");
var resultText = document.getElementById("resultText");
var characterDataTable = document.getElementById("characterDataTable");
searchButton.addEventListener("click", SearchCharacter, false);

function NullableNumber(n) {
    if (typeof(n) == "undefined" || n == null) {
        return 0;
    } else {
        return n;
    }
}

function SkillPatternText(patternID, skillCost, cellToWrite) {
    var patternCell = document.createElement("div");
    patternCell.className = "skillPattern";
    cellToWrite.appendChild(patternCell);
    
    firebase.database().ref('/bosspattern/bosspattern/' + patternID).once('value').then(function(patternDataSnapshot) {
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
                
                firebase.database().ref('/bossskill/bossskill/' + patternData.skillid0).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell0, skillData.skillid0, 1,
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
                
               firebase.database().ref('/bossskill/bossskill/' + patternData.skillid1).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell1, skillData.skillid0, 1,
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
                
                firebase.database().ref('/bossskill/bossskill/' + patternData.skillid2).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell2, skillData.skillid0, 1,
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
                
                firebase.database().ref('/bossskill/bossskill/' + patternData.skillid3).once('value').then(function(skillDataSnapshot) {
                    try {
                        skillData = skillDataSnapshot.val();
                        SkillDetailText(patternSkillCell3, skillData.skillid0, 1,
                            [NullableNumber(skillData.skillparam1), NullableNumber(skillData.skillparam2), NullableNumber(skillData.skillparam3), NullableNumber(skillData.skillparam4), NullableNumber(skillData.skillparam5), NullableNumber(skillData.skillparam6), NullableNumber(skillData.skillparam7), NullableNumber(skillData.skillparam8), NullableNumber(skillData.skillparam9)]
                            [MergeSkillFlag(skillData.skillflag0_0, skillData.skillflag0_1), MergeSkillFlag(skillData.skillflag1_0, skillData.skillflag1_1)],
                            [NullableNumber(skillData.iparam0), NullableNumber(skillData.iparam1)]
                        );
                    } catch(e) {
                    }
                });
            }
            
            patternCell.appendChild(document.createElement("br"));
        } catch(e) {
        }
    });
}

function MergeSkillFlag(flag0, flag1) {
    return (NullableNumber(flag0) & 0xffffffff) + (NullableNumber(flag1) << 0x20);
}

function SkillSystemText(cellToWrite, skillType, skillParams, skillFlag, iParams) {
    cellToWrite.innerHTML += "類別: " + SkillDatas[skillType].typeName;
    
    var paramDescriptions = SkillDatas[skillType].parameterDescription;
    var tableString = "<table class=\"skillSystem\">";
    for (var i=0 ; i<5; i++) {
        tableString += "<tr>";
        for (var j=0 ; j<2 ; j++) {
            tableString += "<td>";
            tableString += paramDescriptions[i*2+j] + ": " + skillParams[i*2+j];
            tableString += "</td>";
        }
        tableString += "</tr>";
    }
    tableString += "</table>";
    cellToWrite.innerHTML += tableString;

    var flagDescriptions = SkillDatas[skillType].flagDescription;
    var flagTableString = "<table class=\"skillSystem\">";
    for (var i=0 ; i<1; i++) {
        tableString += "<tr>";
        for (var j=0 ; j<2 ; j++) {
            flagTableString += "<td>";
            flagTableString += flagDescriptions[i*2+j] + ": " + skillFlag[i*2+j];
            flagTableString += "</td>";
        }
        flagTableString += "</tr>";
    }
    flagTableString += "</table>";
    cellToWrite.innerHTML += flagTableString;
    
    var iParamDescriptions = SkillDatas[skillType].iParameterDescription;
    var iTableString = "<table class=\"skillSystem\">";
    for (var i=0 ; i<1; i++) {
        tableString += "<tr>";
        for (var j=0 ; j<2 ; j++) {
            iTableString += "<td>";
            iTableString += iParamDescriptions[i*2+j] + ": " + iParams[i*2+j];
            iTableString += "</td>";
        }
        iTableString += "</tr>";
    }
    iTableString += "</table>";
    
    cellToWrite.innerHTML += iTableString;
}

function SkillDetailText(cellToWrite, skillType, indent, skillParams, skillFlag, iParams) {
    var outputString = "";

    outputString += SkillFormat(skillType, skillParams, skillFlag, iParams);
    var flagString = SkillFlagString(skillFlag[0]);
    if (flagString != "") {
        outputString += "<div class=\"indent" + (indent+1) + "\">" + flagString + "</div>";
    }
    cellToWrite.innerHTML = outputString;
    
    var popupCell = document.createElement("div");
    popupCell.className = "popup";
    cellToWrite.appendChild(popupCell);
    
    SkillSystemText(popupCell, skillType, skillParams, skillFlag, iParams);
}

function SkillText(characterData, cellToWrite) {
    cellToWrite.innerHTML = "";
    cellToWrite.class = "skill";
    
    try {
        cellToWrite.innerHTML += characterData.skilltext.replace("\\n", "");
        {
            var patternCell = cellToWrite.appendChild(document.createElement("div"));
            patternCell.className = "skillPattern";
            patternCell.innerHTML +=  "耗珠: " + characterData.skill_cost + "<br>" ;
            var skillDetailCell = patternCell.appendChild(document.createElement("div"));
            if (typeof(characterData.skillflag0_0) == "undefined" || characterData.skillflag0_0 == null) {
                SkillDetailText(skillDetailCell, characterData.skillid[0], 0,
                    [NullableNumber(characterData.skillparam0), NullableNumber(characterData.skillparam1), NullableNumber(characterData.skillparam2), NullableNumber(characterData.skillparam3), NullableNumber(characterData.skillparam4), NullableNumber(characterData.skillparam5), NullableNumber(characterData.skillparam6), NullableNumber(characterData.skillparam7), NullableNumber(characterData.skillparam8), NullableNumber(characterData.skillparam9)],
                    [characterData.skillflag, MergeSkillFlag(characterData.skillflag1_0, characterData.skillflag1_1)],
                    [NullableNumber(characterData.iparam0), NullableNumber(characterData.iparam1)]
                );
            } else {
                SkillDetailText(skillDetailCell, characterData.skillid[0], 0,
                    [NullableNumber(characterData.skillparam0), NullableNumber(characterData.skillparam1), NullableNumber(characterData.skillparam2), NullableNumber(characterData.skillparam3), NullableNumber(characterData.skillparam4), NullableNumber(characterData.skillparam5), NullableNumber(characterData.skillparam6), NullableNumber(characterData.skillparam7), NullableNumber(characterData.skillparam8), NullableNumber(characterData.skillparam9)],
                    [MergeSkillFlag(characterData.skillflag0_0, characterData.skillflag0_1), MergeSkillFlag(characterData.skillflag1_0, characterData.skillflag1_1)],
                    [NullableNumber(characterData.iparam0), NullableNumber(characterData.iparam1)]
                );
            }
            patternCell.appendChild(document.createElement("br"));
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

function PassiveDetailText(passiveType, passiveFlag, passiveParams) {
    var outputString = "";

    if (typeof(PassiveFormat[passiveType]) == "undefined" || PassiveFormat[passiveType] == null) {
        outputString += "Type: " + passiveType + " [";
        var first = true;
        for(var param in passiveParams) {
            if (first) {
                outputString += passiveParams[param];
                first = false;
            } else {
                outputString += ", " + passiveParams[param];
            }
        }
        outputString += "]";
    } else {
        outputString += PassiveFormat[passiveType].format(passiveParams[0], passiveParams[1], passiveParams[2], passiveParams[3], passiveParams[4], passiveParams[5], passiveParams[6], passiveParams[7], passiveParams[8], passiveParams[9]);
        var flagString = SkillFlagString(passiveFlag);
        if (flagString != "") {
            outputString += "<div class=\"indent1\">" + flagString + "</div>";
        }
    }

    
    return outputString;
}

function PassiveText(passiveSkillID, cellToWrite) {
    cellToWrite.innerHTML = "";
    cellToWrite.class = "passiveSkill";

    firebase.database().ref('/skilllist/skilllist/' + passiveSkillID).once('value').then(function(passiveDataSnapshot) {
        try {
            passiveData = passiveDataSnapshot.val();
            
            cellToWrite.innerHTML += passiveData.text.replace("\\n", "");;

            var passiveCell = document.createElement("div");
            cellToWrite.appendChild(passiveCell);
            passiveCell.innerHTML += PassiveDetailText(passiveData.ability, MergeSkillFlag(passiveData.flag0_0, passiveData.flag0_1), [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)]);
            for(var subID in passiveData.sub) {
                firebase.database().ref('/skilllist/skilllist/' + passiveData.sub[subID]).once('value').then(function(subPassiveDataSnapshot) {
                    try {
                        subPassiveData = subPassiveDataSnapshot.val();

                        var subPassiveCell = document.createElement("div");
                        passiveCell.appendChild(subPassiveCell);
                        subPassiveCell.innerHTML += PassiveDetailText(subPassiveData.ability, MergeSkillFlag(subPassiveData.flag0_0, subPassiveData.flag0_1), [NullableNumber(subPassiveData.param0), NullableNumber(subPassiveData.param1), NullableNumber(subPassiveData.param2), NullableNumber(subPassiveData.param3), NullableNumber(subPassiveData.param4), NullableNumber(subPassiveData.param5), NullableNumber(subPassiveData.param6), NullableNumber(subPassiveData.param7), NullableNumber(subPassiveData.param8), NullableNumber(subPassiveData.param9)]);
                    } catch(e) {
                    }
                });
            }
        } catch (e) {
            cellToWrite.innerHTML = "";
        }
    });
}

function SupportText(supportCost, supportSkillID, supportSkillType, cellToWrite) {
    cellToWrite.innerHTML = "";
    cellToWrite.class = "supportSkill";

    firebase.database().ref('/supporterskill/supporterskill/' + supportSkillID).once('value').then(function(supportDataSnapshot) {
        try {
            supportData = supportDataSnapshot.val();
            
            cellToWrite.innerHTML += supportData.text.replace("\\n", "");
            cellToWrite.innerHTML += "<div>Cost: " + supportCost + "</div>";
            firebase.database().ref('/supporterskill/supporterskill/' + supportSkillType).once('value').then(function(supportTypeDataSnapshot) {
                try {
                    supportTypeData = supportTypeDataSnapshot.val();
                
                    cellToWrite.innerHTML += "<div>類型:" + supportTypeData.name + "</div>";
                } catch(e) {
                }
            });
            
            if (NullableNumber(supportData.abi0) != 0) {
                firebase.database().ref('/skilllist/skilllist/' + supportData.abi0).once('value').then(function(passiveDataSnapshot) {
                    try {
                        passiveData = passiveDataSnapshot.val();
                        
                        cellToWrite.innerHTML += "<div>" + PassiveDetailText(passiveData.ability, (passiveData.flag0_0 & 0xffffffff) + (passiveData.flag0_1 << 0x20), [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)]) + "</div>";
                    } catch(e) {
                    }
                });
            }
            if (NullableNumber(supportData.abi1) != 0) {
                firebase.database().ref('/skilllist/skilllist/' + supportData.abi1).once('value').then(function(passiveDataSnapshot) {
                    try {
                        passiveData = passiveDataSnapshot.val();
                        
                        cellToWrite.innerHTML += "<div>" + PassiveDetailText(passiveData.ability, (passiveData.flag0_0 & 0xffffffff) + (passiveData.flag0_1 << 0x20), [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)]) + "</div>";
                    } catch(e) {
                    }
                });
            }
            if (NullableNumber(supportData.abi2) != 0) {
                firebase.database().ref('/skilllist/skilllist/' + supportData.abi2).once('value').then(function(passiveDataSnapshot) {
                    try {
                        passiveData = passiveDataSnapshot.val();
                        
                        cellToWrite.innerHTML += "<div>" + PassiveDetailText(passiveData.ability, (passiveData.flag0_0 & 0xffffffff) + (passiveData.flag0_1 << 0x20), [NullableNumber(passiveData.param0), NullableNumber(passiveData.param1), NullableNumber(passiveData.param2), NullableNumber(passiveData.param3), NullableNumber(passiveData.param4), NullableNumber(passiveData.param5), NullableNumber(passiveData.param6), NullableNumber(passiveData.param7), NullableNumber(passiveData.param8), NullableNumber(passiveData.param9)]) + "</div>";
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
    
    firebase.database().goOnline();
    firebase.database().ref('/charainfo/charainfo').orderByChild("name").equalTo(characterName.value).once('value').then(function(dataSnapshot) {
        var n = dataSnapshot.numChildren();
        var charactersData = dataSnapshot.val();
        for (var characterData in charactersData) {
            var row = characterDataTable.tBodies[0].insertRow(-1);
            
            var nameCell = row.insertCell(-1);
            nameCell.class = "name";
            nameCell.innerHTML = charactersData[characterData].title + "<br>" + charactersData[characterData].name;
            
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