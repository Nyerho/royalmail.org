//tealium universal tag - utag.1034 ut4.0.202605010910, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {
            id: id
        };
        utag.o[loader].sender[id] = u;
        u.ev = {
            view: 1,
            link: 1
        };
        u.inquiryLoaded = false;
        u.toBoolean = function(val) {
            val = val || "";
            return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
        };
        u.isEmptyObject = function(o, a) {
            for (a in o) {
                if (utag.ut.hasOwn(o, a)) return false;
            }
            return true;
        };
        u.clearEmptyKeys = function(object) {
            Object.keys(object).forEach(function(key) {
                if (object[key] === '' || object[key] === undefined) {
                    delete object[key];
                }
            });
            return object;
        };
        u.mapFunc = function(arr, obj, item) {
            var i = arr.shift();
            obj[i] = obj[i] || {};
            if (arr.length > 0) {
                u.mapFunc(arr, obj[i], item);
            } else {
                obj[i] = item;
            }
        };
        u.getFromObject = function(splitValue, data_layer) {
            if (splitValue.indexOf("b.") == 0) {
                return data_layer[splitValue.replace("b.", "")];
            } else if (splitValue.indexOf("utag.data.") == 0) {
                return utag.data[splitValue.replace("utag.data.", "")];
            } else {
                return window[splitValue];
            }
        }
        u.returnReplacementValue = function(value, data_layer) {
            var splitValue = value.replace(/[{}]/g, "").split("||");
            if (splitValue.length > 1) {
                return u.getFromObject(splitValue[0].trim(), data_layer) || splitValue[1].trim();
            }
            return u.getFromObject(splitValue[0].trim(), data_layer) || "";
        }
        u.replacementLoop = function(results, configString, data_layer) {
            var newString = configString;
            for (var replace = 0; replace < results.length; replace++) {
                var replacement = u.returnReplacementValue(results[replace], data_layer);
                newString = newString.replace(results[replace], replacement);
            }
            return newString
        }
        u.generateReplacements = function(data_layer, configs) {
            var contentRegExp = new RegExp(/{{(.+?)}}/g);
            Object.keys(configs.questions).forEach(function(questionId) {
                var questionResults = configs.questions[questionId].questionText.match(contentRegExp);
                if (questionResults) {
                    configs.questions[questionId].questionText = u.replacementLoop(questionResults, configs.questions[questionId].questionText, data_layer);
                }
                var answerList = configs.questions[questionId].answers;
                for (var answerNum = 0; answerNum < answerList.length; answerNum++) {
                    var answerResults = answerList[answerNum].text.match(contentRegExp);
                    if (answerResults) {
                        configs.questions[questionId].answers[answerNum].text = u.replacementLoop(answerResults, answerList[answerNum].text, data_layer);
                    }
                }
            });
            var headerResults = configs.headerTitle.content.text.match(contentRegExp);
            var mainResults = configs.mainBodyText.content.text.match(contentRegExp);
            if (headerResults) {
                configs.headerTitle.content.text = u.replacementLoop(headerResults, configs.headerTitle.content.text, data_layer);
            }
            if (mainResults) {
                configs.mainBodyText.content.text = u.replacementLoop(mainResults, configs.mainBodyText.content.text, data_layer);
            }
        };
        u.generateAnswersArray = function(answers, data_layer) {
            var answersArray = [];
            if (answers && typeof answers === "string") {
                var contentRegExp = new RegExp(/{{(.+?)}}/g);
                var answerResults = answers.match(contentRegExp);
                if (answerResults) {
                    answers = u.replacementLoop(answerResults, answers, data_layer);
                }
                try {
                    answersArray = JSON.parse(answers);
                } catch (error) {
                    answersArray = answers.split("|");
                }
            } else if (utag.ut.typeOf(answers) === "array") {
                answersArray = answers;
            }
            return answersArray.map(function(answer, i) {
                return {
                    id: i + 1,
                    text: answer
                };
            })
        };
        u.mergeMappings = function(mappings, configs, data_layer) {
            var containerRegExp = new RegExp("Container|primaryButton|headerTitle|mainBodyText|imageNode|secondaryButton");
            var contentRegExp = new RegExp("answerType|answers|questionText");
            Object.keys(mappings).forEach(function(prop) {
                if (containerRegExp.test(prop)) {
                    Object.keys(mappings[prop]).forEach(function(nestedProp) {
                        if (mappings[prop][nestedProp]) {
                            configs[prop].styles[nestedProp] = mappings[prop][nestedProp];
                        }
                    });
                } else if (mappings[prop] === false || mappings[prop]) {
                    if (contentRegExp.test(prop) && (mappings["questionText"] || mappings["questions"])) {
                        if (!configs.questions[u.data.uniqueSurveyId + "_question1"]) {
                            configs.questions[u.data.uniqueSurveyId + "_question1"] = {};
                        }
                        configs.questions[u.data.uniqueSurveyId + "_question1"][prop] = mappings[prop];
                        if (prop === "answers" && typeof prop === "string") {
                            configs.questions[u.data.uniqueSurveyId + "_question1"][prop] = u.generateAnswersArray(mappings[prop], data_layer)
                        }
                    } else if (prop === "headerText") {
                        configs.headerTitle.content.text = mappings[prop]
                    } else if (prop === "mainText") {
                        configs.mainBodyText.content.text = mappings[prop]
                    } else if (prop === "primaryText") {
                        configs.primaryButton.content.text = mappings[prop]
                    } else {
                        configs[prop] = mappings[prop];
                    }
                }
            });
        }
        var configs = {
            "surveyId": "1",
            "trackLoad": false,
            "trackType": "link",
            "type": "modal",
            "placement": "center",
            "suppress": "never",
            "position": "",
            "selector": "",
            "redirect_url": "",
            "redirect_open_tab": false,
            "imageUrl": "",
            "imagePosition": "left",
            "answer_required": false,
            "questions": {},
            "radioContainer": {
                "styles": {
                    "display": "flex",
                    "padding": "0px 16px",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                },
            },
            "buttonContainer": {
                "styles": {
                    "display": "flex",
                    "padding": "",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                },
            },
            "textFieldContainer": {
                "styles": {
                    "display": "flex",
                    "padding": "0px 16px",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                },
            },
            "checkboxContainer": {
                "styles": {
                    "display": "flex",
                    "padding": "0px 16px",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                },
            },
            "answerContainer": {
                "styles": {
                    "alignSelf": "stretch",
                },
            },
            "bodyContainer": {
                "styles": {
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                    "alignSelf": "stretch",
                    "minHeight": "140px",
                },
            },
            "questionContainer": {
                "styles": {
                    "marginBottom": "16px",
                    "alignSelf": "stretch",
                },
            },
            "outerContainer": {
                "styles": {
                    "display": "flex",
                    "width": "500px",
                    "padding": "24px",
                    "flexDirection": "column",
                    "alignItems": "flex-end",
                    "borderRadius": "8px",
                    "background": "var(--grey-grey-25, #FCFCFC)",
                    "boxShadow": "0px 1px 6px 0px rgba(48, 59, 76, 0.10)",
                },
            },
            "innerContainer": {
                "styles": {
                    "display": "flex",
                    "alignItems": "flex-start",
                    "alignSelf": "stretch",
                    "flexDirection": "column",
                },
            },
            "imageContainer": {
                "styles": {
                    "width": "100%",
                },
            },
            "imageNode": {
                "styles": {
                    "borderRadius": "8px 0 0 8px",
                    "maxWidth": "400px",
                    "display": "block"
                }
            },
            "headerContainer": {
                "styles": {
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "flex-start",
                    "alignSelf": "stretch",
                    "width": "100%",
                    "height": "auto",
                },
            },
            "headerTitle": {
                "styles": {
                    "flex": "1 0 0",
                    "margin": "0 0 16px 0",
                    "color": "#1B1B1B",
                    "fontFamily": "Arial",
                    "fontSize": "16px",
                    "fontStyle": "normal",
                    "fontWeight": "700",
                    "lineHeight": "24px",
                },
                "content": {
                    "text": "",
                },
            },
            "mainBodyText": {
                "styles": {
                    "alignSelf": "stretch",
                    "color": "#0A1B36",
                    "fontFamily": "Arial",
                    "fontSize": "14px",
                    "fontStyle": "normal",
                    "fontWeight": "400",
                    "lineHeight": "20px",
                },
                "content": {
                    "text": "",
                },
            },
            "footerContainer": {
                "styles": {
                    "display": "flex",
                    "width": "100%",
                    "height": "auto",
                    "flexDirection": "column",
                    "alignItems": "flex-end",
                },
            },
            "primaryButton": {
                "styles": {
                    "display": "flex",
                    "padding": "8px",
                    "alignItems": "center",
                    "borderRadius": "4px",
                    "background": "#1B1B1B",
                    "color": "#FFF",
                    "fontFamily": "Arial",
                    "fontSize": "16px",
                    "fontStyle": "normal",
                    "fontWeight": "400",
                    "lineHeight": "16px",
                },
                "content": {
                    "text": "Submit",
                },
            },
            "secondaryButton": {
                "styles": {
                    "display": "flex",
                    "padding": "8px",
                    "alignItems": "center",
                    "borderRadius": "4px",
                    "background": "#FFFFFF",
                    "color": "#1B1B1B",
                    "fontFamily": "Arial",
                    "fontSize": "16px",
                    "fontStyle": "normal",
                    "fontWeight": "400",
                    "lineHeight": "16px",
                },
                "content": {
                    "text": "Submit",
                },
            },
        };
        u.map = {
            "rmShopSignupPlacementSelector": "selector"
        };
        u.extend = [function(a, b) {
            try {
                if (1) {
                    var extensionName = 'Extension UID: 862, \'RM Shop sign-up panel placement - moments\'';
                    if (b.pageName === 'RM Shop >Homepage') {
                        b.rmShopSignupPlacementSelector = '#maincontent';
                    } else if (b.pageTemplate === 'Product Detail') {
                        b.rmShopSignupPlacementSelector = '.product.info.detailed'
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var extensionName = 'Extension UID: 858, \'RM Shop sign-up panel - moments\'';
                    utag.DB(extensionName + ', starting');
                    var modalStyleEl = document.createElement('style');
                    modalStyleEl.id = 'signupPanelStyling';
                    modalStyleEl.textContent = ".displayBlock {    display: block !important}.hideThis {    display: none !important}.makeInvisible {    visibility: hidden}#royalmail_main_inquiry1034_outerContainer * {    box-sizing: border-box;    font-family: \"ChevinStd-Light\", Arial, sans-serif;}#maincontent~#royalmail_main_inquiry1034_outerContainer {    margin-bottom: 20px;}#rmShopSignUpPanelValidationError {    font-size: 18px;    color: red;    line-height: initial;    margin: 5px 0 20px;}#royalmail_main_inquiry1034_outerContainer {    text-align: center;    margin-bottom: 20px}#royalmail_main_inquiry1034_closeButton,#royalmail_main_inquiry1034_question1_questionContainer,#royalmail_main_inquiry1034_headerText {    display: none;}#royalmail_main_inquiry1034_headerTitle {    font-size: 25px;    margin-bottom: 0;    position: relative;    top: 5px;    word-wrap: break-word;}#royalmail_main_inquiry1034_headerContainer {    display: inline-block;}#signupBodyWrapper {    display: inline-block;}#royalmail_main_inquiry1034_bodyContainer {    display: inline-block;    margin-left: 20px;    vertical-align: top;}#royalmail_main_inquiry1034_footerContainer {    display: inline-block;    margin-left: 20px;}#royalmail_main_inquiry1034_question1_answer1 {    height: 40px;    width: 440px;    font-size: 15px;    font-weight: 100;    border: 1px solid #a6a6a6;}#royalmail_main_inquiry1034_primaryButton {    width: 150px;    height: 40px;    margin: 0 -10px 0 0 !important;    background-color: #589f28;    color: white;    font-weight: bold;}@media (max-width: 1024px) {    #royalmail_main_inquiry1034_headerContainer {        display: block;        margin-bottom: 10px;    }    #signupBodyWrapper {        text-align: center;        width: 100%;        display: block;    }    #royalmail_main_inquiry1034_headerTitle {        text-align: center;    }    #royalmail_main_inquiry1034_bodyContainer {        margin-left: 0;    }    #royalmail_main_inquiry1034_question1_answer1 {        width: 400px;    }}@media (max-width: 768px) {    #royalmail_main_inquiry1034_bodyContainer {        margin-left: 0;    }}@media (max-width: 600px) {    #royalmail_main_inquiry1034_question1_answer1, #rmShopSignUpPanelValidationError {        width: 210px;    }}@media (max-width: 426px) {    #royalmail_main_inquiry1034_question1_answer1, #rmShopSignUpPanelValidationError {        width: 150px;    }    #royalmail_main_inquiry1034_bodyContainer {        margin-left: 0;    }    #royalmail_main_inquiry1034_footerContainer {        margin-left: 10px;    }    #rmShopSignUpPanelValidationError {        margin-bottom: 0;    }    #royalmail_main_inquiry1034_primaryButton {        font-size: 18px;    }    #royalmail_main_inquiry1034_question1_answer1 {        font-size: 12px;    }}@media (max-width: 321px) {    #royalmail_main_inquiry1034_primaryButton {        width: 120px;    }    #royalmail_main_inquiry1034_bodyContainer {        margin-left: 0;    }    #royalmail_main_inquiry1034_footerContainer {        margin-left: 5px;    }}";
                    document.head.appendChild(modalStyleEl);
                    var validationErrorEl = document.createElement('div');
                    validationErrorEl.id = 'rmShopSignUpPanelValidationError';
                    validationErrorEl.classList.add('makeInvisible');
                    validationErrorEl.textContent = 'A valid email address is required';
                    document.querySelector('#royalmail_main_inquiry1034_bodyContainer').appendChild(validationErrorEl);
                    document.querySelector('#royalmail_main_inquiry1034_primaryButton').addEventListener('click', function(event) {
                        event.preventDefault();
                        var enteredEmail = document.querySelector('#royalmail_main_inquiry1034_question1_answer1').value;
                        var invalidEmail = !/^[a-zA-Z0-9-=_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(enteredEmail);
                        if (invalidEmail) {
                            document.querySelector('#rmShopSignUpPanelValidationError').classList.remove('makeInvisible');
                        } else {
                            document.querySelector('#royalmail_main_inquiry1034_question1_answerContainer').classList.add('hideThis');
                            document.querySelector('#royalmail_main_inquiry1034_footerContainer').classList.add('hideThis');
                            document.querySelector('#royalmail_main_inquiry1034_question1_questionText').textContent = 'Thank you for signing up.';
                            document.querySelector('#royalmail_main_inquiry1034_question1_questionText').classList.remove('hideThis');
                        }
                    });
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(utag_event, data_layer) {
            if (!u.ev[utag_event] && u.ev.all === undefined) {
                utag.DB('send:1034:EVENT NOT SUPPORTED:COMPLETE');
                return;
            }
            utag.DB('send:1034');
            utag.DB(data_layer);
            var a, b, c, d, e, f, g, h, query_params;
            a = utag_event;
            b = data_layer;
            u.data = {
                "surveyId": id,
                "uniqueSurveyId": data_layer.tealium_account + "_" + data_layer.tealium_profile + "_inquiry" + id,
                "trackLoad": u.toBoolean("true"),
                "trackType": "link",
                "redirect_url": "",
                "redirect_open_tab": u.toBoolean("false"),
                "zindex": "9999",
                "suppress": "afterSubmit",
                "type": "embedded",
                "placement": "center",
                "selector": ".product.info.detailed",
                "position": "afterend",
                "questions": JSON.stringify() || null,
                "questionText": ".",
                "answerType": "text",
                "answers": 'Please enter your email address' || [],
                "answer_required": u.toBoolean("true") || false,
                "headerText": "Sign up to our Stamps and Collectibles newsletter",
                "mainText": "",
                "primaryText": "Submit",
                "imageUrl": "",
                "imagePosition": "left",
                "altText": "",
                "imageNode": {
                    "borderRadius": ""
                },
                "outerContainer": {
                    "background": "",
                    "margin": "",
                    "borderStyle": "",
                    "borderColor": "",
                    "width": ""
                },
                "innerContainer": {
                    "padding": "",
                    "width": ""
                },
                "headerTitle": {
                    "color": "",
                    "fontFamily": "",
                    "fontSize": "",
                    "fontStyle": "",
                    "fontWeight": "",
                    "width": ""
                },
                "bodyContainer": {
                    "width": "",
                    "minHeight": ""
                },
                "mainBodyText": {
                    "color": "",
                    "fontFamily": "",
                    "fontSize": "",
                    "fontStyle": "",
                    "fontWeight": "",
                },
                "questionContainer": {
                    "color": "",
                    "fontFamily": "",
                    "fontSize": "",
                    "fontStyle": "",
                    "fontWeight": "",
                    "margin": "",
                    "textAlign": "",
                },
                "answerContainer": {
                    "color": "",
                    "fontFamily": "",
                    "fontSize": "",
                    "fontStyle": "",
                    "fontWeight": "",
                    "margin": "",
                    "textAlign": "",
                    "flexDirection": "",
                },
                "footerContainer": {
                    "width": ""
                },
                "primaryButton": {
                    "color": "",
                    "fontFamily": "",
                    "fontSize": "",
                    "fontStyle": "",
                    "fontWeight": "",
                    "background": "",
                    "width": "",
                    "textAlign": "",
                    "display": "",
                    "margin": ""
                },
                "secondaryButton": {
                    "color": "",
                    "fontFamily": "",
                    "fontSize": "",
                    "fontStyle": "",
                    "fontWeight": "",
                    "background": "",
                    "width": "",
                    "textAlign": "",
                    "display": "",
                    "margin": ""
                },
                "radioContainer": {
                    "flexDirection": "",
                    "alignItems": "",
                },
                "checkboxContainer": {
                    "flexDirection": "",
                    "alignItems": "",
                },
                "textFieldContainer": {
                    "flexDirection": "",
                    "alignItems": "",
                },
                "buttonContainer": {
                    "flexDirection": "",
                    "alignItems": "",
                },
                "selectedAnswers": {}
            };
            for (c = 0; c < u.extend.length; c++) {
                try {
                    d = u.extend[c](a, b);
                    if (d == false) return
                } catch (e) {
                    if (typeof utag_err != 'undefined') {
                        utag_err.push({
                            e: 'extension error:' + e,
                            s: utag.cfg.path + 'utag.' + id + '.js',
                            l: c,
                            t: 'ex'
                        })
                    }
                }
            };
            utag.DB('send:1034:EXTENSIONS');
            utag.DB(data_layer);
            query_params = [];
            Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key) {
                if (data_layer[mapping_key] !== undefined && data_layer[mapping_key] !== '') {
                    var destinations = u.map[mapping_key].split(',');
                    destinations.forEach(function(parameter) {
                        u.mapFunc(parameter.split('.'), u.data, data_layer[mapping_key]);
                    });
                } else {
                    var event_destinations = mapping_key.split(':');
                    if (event_destinations.length === 2 && String(data_layer[event_destinations[0]]) === String(event_destinations[1])) {
                        if (u.map[mapping_key]) {
                            u.data.events = u.data.events.concat(u.map[mapping_key].split(','));
                        }
                    }
                }
            });
            utag.DB('send:1034:MAPPINGS');
            utag.DB(u.data);

            function isInvalidImageUrl(imgUrl) {
                var isInvalid = false;
                if (!/^https:.*$/i.test(imgUrl)) {
                    isInvalid = true;
                } else if (!/^http[^\?]*.(jpg|jpeg|gif|png|svg)(\?(.*))?$/gmi.test(imgUrl)) {
                    isInvalid = true;
                }
                return isInvalid;
            }

            function buildSelectedAnswers(uData, target) {
                var type = target.type;
                var id = target.id;
                var value = target.value;
                var checked = target.checked;
                var surveyIDList = id.split("_");
                var questionNumber = surveyIDList[3];
                var answerNumber = surveyIDList[4];
                if (id.indexOf(uData.uniqueSurveyId) > -1) {
                    switch (type) {
                        case "radio":
                            u.data.selectedAnswers[questionNumber] = {};
                            u.data.selectedAnswers[questionNumber].type = type;
                            u.data.selectedAnswers[questionNumber][answerNumber] = {
                                checked: checked,
                                value: value
                            };
                            break;
                        case "checkbox":
                            u.data.selectedAnswers[questionNumber] = uData.selectedAnswers[questionNumber] || {};
                            u.data.selectedAnswers[questionNumber].type = type;
                            if (checked) {
                                u.data.selectedAnswers[questionNumber][answerNumber] = {
                                    checked: checked,
                                    value: value
                                }
                            } else {
                                delete u.data.selectedAnswers[questionNumber][answerNumber];
                            }
                            break;
                        case "button":
                            u.data.selectedAnswers[questionNumber] = uData.selectedAnswers[questionNumber] || {};
                            u.data.selectedAnswers[questionNumber].type = type;
                            u.data.selectedAnswers[questionNumber][answerNumber] = {
                                value: value
                            }
                            break;
                        default:
                            if (u.data.selectedAnswers[questionNumber]) {
                                if (!u.data.selectedAnswers[questionNumber][answerNumber]) {
                                    u.data.selectedAnswers[questionNumber][answerNumber] = {}
                                }
                                u.data.selectedAnswers[questionNumber][answerNumber].value = value;
                            } else {
                                u.data.selectedAnswers[questionNumber] = {};
                                u.data.selectedAnswers[questionNumber].type = type;
                                u.data.selectedAnswers[questionNumber][answerNumber] = {
                                    value: value
                                }
                            };
                            break;
                    }
                }
            }

            function addChangeEventListener() {
                document.addEventListener("change", function tealiumInquiryChange(e) {
                    if (e.target.id.indexOf(u.data.uniqueSurveyId) > -1) {
                        buildSelectedAnswers(u.data, e.target)
                    }
                });
            }

            function collectSurveyResults(configs) {
                var flattenedObject = {}
                var selectedAnswers = u.data.selectedAnswers;
                var questionList = Object.keys(selectedAnswers);
                questionList.forEach(function(question) {
                    var regex = /\d+/gi;
                    var answerNumber = question.match(regex);
                    var questionType = selectedAnswers[question].type;
                    var answerValues = Object.keys(selectedAnswers[question]).map(function(key) {
                        return selectedAnswers[question][key]
                    });
                    flattenedObject["momentsiq_" + question] = configs.questions[u.data.uniqueSurveyId + "_" + question].questionText;
                    flattenedObject["momentsiq_answer" + answerNumber] = answerValues.filter(function(prop) {
                        return typeof prop !== "string"
                    }).map(function(answer) {
                        return answer.value
                    }).join("|");
                    flattenedObject["momentsiq_" + question + "_type"] = questionType;
                });
                return flattenedObject;
            }

            function closeModal(surveyId, action) {
                var modal = document.getElementById(surveyId + "_outerContainer");
                if (configs.suppress !== "never") {
                    switch (configs.suppress) {
                        case "afterClose":
                            {
                                if (action === "close") {
                                    setLocal(surveyId);
                                }
                                break;
                            }
                        case "afterSubmit":
                            {
                                if (action === "submit") {
                                    setLocal(surveyId);
                                }
                                break;
                            }
                        case "closeOrSubmit":
                            {
                                setLocal(surveyId);
                                break;
                            }
                        default:
                            break;
                    }
                }
            }

            function addStyles(styles, node) {
                return;
            }

            function createButton(name, id, callback) {
                var buttonNode;
                buttonNode = createElement("button", id);
                buttonNode.onclick = callback;
                addStyles(configs[name].styles, buttonNode);
                buttonNode.innerText = configs[name].content.text;
                return buttonNode;
            }

            function createElement(type, id) {
                var elem = document.createElement(type);
                if (id) {
                    elem.id = id;
                }
                return elem;
            }

            function createCloseButton(uid, surveyId, trackType) {
                var button, svg, svgPath, svgTitle;
                button = document.createElement("button");
                button.id = uid + "_closeButton";
                addStyles({
                    border: "none",
                    background: "transparent"
                }, button);
                svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.id = uid + "_closeIcon";
                button.onclick = function() {
                    var questionList = Object.keys(u.data.selectedAnswers);
                    utag.track(trackType, {
                        tealium_event: "momentsiq_close",
                        momentsiq_id: surveyId,
                        momentsiq_questions_answered: questionList.join(),
                    });
                    closeModal(uid, "close");
                };
                addStyles({
                    "height": "12px",
                    "width": "12px",
                    "marginLeft": "auto",
                }, svg);
                svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                svgPath.setAttribute("d", "M7.27298 6.00019L11.1191 2.15407L11.9122 1.36092C12.0293 1.24391 12.0293 1.05378 11.9122 0.93678L11.0636 0.0881278C10.9466 -0.0288758 10.7565 -0.0288758 10.6395 0.0881278L6.00019 4.7274L1.36092 0.0877527C1.24391 -0.0292509 1.05378 -0.0292509 0.936779 0.0877527L0.0877527 0.936404C-0.0292509 1.05341 -0.0292509 1.24354 0.0877527 1.36054L4.7274 6.00019L0.0877527 10.6395C-0.0292509 10.7565 -0.0292509 10.9466 0.0877527 11.0636L0.936404 11.9122C1.05341 12.0293 1.24354 12.0293 1.36054 11.9122L6.00019 7.27298L9.84631 11.1191L10.6395 11.9122C10.7565 12.0293 10.9466 12.0293 11.0636 11.9122L11.9122 11.0636C12.0293 10.9466 12.0293 10.7565 11.9122 10.6395L7.27298 6.00019Z");
                svgPath.setAttribute("fill", "#1B1B1B");
                svgTitle = document.createElementNS("http://www.w3.org/2000/svg", "title");
                svgTitle.textContent = "SVG X for Close";
                svg.appendChild(svgPath);
                svgPath.appendChild(svgTitle);
                button.appendChild(svg);
                return button;
            }

            function createQuestion(question, id) {
                var questionNode, questionContent;
                questionNode = createElement("div", id + "_questionContainer");
                addStyles(configs.questionContainer.styles, questionNode)
                questionContent = createElement("p", id + "_questionText");
                questionContent.innerText = question[id].questionText;
                questionNode.appendChild(questionContent);
                return questionNode;
            }

            function createAnswers(question, id) {
                var answerContainer, name = "answerContainer",
                    type = configs.questions[id].answerType;
                answerContainer = createElement("div", id + "_" + name);
                addStyles(configs.answerContainer.styles, answerContainer)
                if (type === "radio") {
                    answerContainer.appendChild(createRadio(question[id].answers, id));
                } else if (type === "text") {
                    answerContainer.appendChild(createTextField(question[id].answers, id));
                } else if (type === "checkbox") {
                    answerContainer.appendChild(createCheckbox(question[id].answers, id));
                } else if (type === "button") {
                    answerContainer.style.marginTop = "auto";
                    answerContainer.appendChild(createAnswerButton(question[id].answers, id));
                }
                return answerContainer;
            }

            function createRadio(answers, surveyId) {
                var radioContainer;
                radioContainer = createElement("div", surveyId + "_radioContainer");
                addStyles(configs.radioContainer.styles, radioContainer);
                answers.forEach(function(answer) {
                    var id = surveyId + "_answer" + answer.id,
                        name = surveyId + "_inquiryAnswer",
                        optionContainer = createElement("div"),
                        radio = createElement("input"),
                        label = createElement("label");
                    radio.id = id;
                    radio.name = name;
                    radio.type = "radio";
                    radio.value = answer.text;
                    radio.style.cursor = "pointer";
                    if (configs.answer_required) {
                        radio.required = true;
                    }
                    optionContainer.appendChild(radio);
                    label.innerText = answer.text;
                    label.htmlFor = id;
                    label.style.cursor = "pointer";
                    addStyles({
                        margin: "8px"
                    }, label);
                    optionContainer.appendChild(label);
                    radioContainer.appendChild(optionContainer);
                });
                return radioContainer;
            }

            function createAnswerButton(answers, surveyId) {
                var firstTwoAnswers = answers.slice(0, 2);
                var buttonContainer;
                var submitAnswer = function submitAnswer(e) {
                    var trackType = configs.trackType;
                    var url = configs.redirect_url;
                    buildSelectedAnswers(u.data, e.target);
                    var trackObject = collectSurveyResults(configs);
                    trackObject.tealium_event = "momentsiq_submit";
                    trackObject.eventName = 'rm_shop_signup_panel_submitted', trackObject.momentsiq_id = configs.surveyId;
                    utag.track(trackType, trackObject);
                    if (url) {
                        configs.redirect_open_tab ? window.open(url) : window.location.assign(url);
                    }
                    setTimeout(function() {
                        closeModal(configs.uniqueSurveyId, "submit");
                    }, 100);
                }
                buttonContainer = createElement("div", surveyId + "_buttonContainer");
                addStyles(configs.buttonContainer.styles, buttonContainer);
                firstTwoAnswers.forEach(function(answer, index) {
                    var id = surveyId + "_answer" + answer.id,
                        name = surveyId + "_inquiryAnswer",
                        optionContainer = createElement("div"),
                        answerButton = createElement("button");
                    answerButton.id = id;
                    answerButton.name = name;
                    answerButton.type = "button";
                    answerButton.value = answer.text;
                    answerButton.style.cursor = "pointer";
                    answerButton.style.width = "100%";
                    answerButton.style.justifyContent = "center";
                    answerButton.innerText = answer.text;
                    answerButton.style.flexDirection = "column";
                    answerButton.onclick = submitAnswer;
                    if (index === 0) {
                        addStyles(configs.primaryButton.styles, answerButton);
                        if (configs.buttonContainer.styles.flexDirection === "column") {
                            optionContainer.style.marginBottom = "8px";
                        } else {
                            optionContainer.style.marginRight = "16px";
                        }
                    } else {
                        addStyles(configs.secondaryButton.styles, answerButton);
                    }
                    optionContainer.style.width = "100%";
                    optionContainer.appendChild(answerButton);
                    buttonContainer.appendChild(optionContainer);
                });
                return buttonContainer;
            }

            function createTextField(answers, surveyId) {
                var textFieldContainer, answerId = answers[0] && answers[0].id || "1";
                textFieldContainer = createElement("div", surveyId + "_textFieldContainer");
                addStyles(configs.textFieldContainer.styles, textFieldContainer);
                var id = surveyId + "_answer" + answerId,
                    name = surveyId + "_inquiryAnswer",
                    optionContainer = createElement("div"),
                    textField = createElement("input"),
                    label = createElement("label");
                textField.id = id;
                textField.name = name;
                textField.type = "text";
                textField.value = "";
                textField.placeholder = answers[0] && answers[0].text || "";
                if (configs.answer_required) {
                    textField.required = true;
                }
                optionContainer.appendChild(textField);
                textFieldContainer.appendChild(optionContainer);
                return textFieldContainer;
            }

            function createCheckbox(answers, surveyId) {
                var checkboxContainer;
                checkboxContainer = createElement("div", surveyId + "_checkboxContainer");
                addStyles(configs.checkboxContainer.styles, checkboxContainer);
                answers.forEach(function(answer) {
                    var id = surveyId + "_answer" + answer.id,
                        name = surveyId + "_inquiryAnswer",
                        optionContainer = createElement("div"),
                        checkbox = createElement("input"),
                        label = createElement("label");
                    checkbox.id = id;
                    checkbox.name = name;
                    checkbox.type = "checkbox";
                    checkbox.value = answer.text;
                    checkbox.style.cursor = "pointer";
                    if (configs.answer_required) {
                        checkbox.required = true;
                        checkbox.setCustomValidity("Please select at least one of these options.");
                        checkbox.onclick = function() {
                            var boxList = document.getElementsByName(`${surveyId}_inquiryAnswer`);
                            var checkedState = [];
                            boxList.forEach(function(el) {
                                return el.checked ? checkedState.push(true) : checkedState.push(false);
                            });
                            if (checkedState.indexOf(true) > -1) {
                                boxList.forEach(function(el) {
                                    el.setCustomValidity("");
                                    el.removeAttribute("required");
                                });
                            } else {
                                boxList.forEach(function(el) {
                                    el.setCustomValidity("Please select at least one of these options.");
                                    el.setAttribute("required", true);
                                });
                            }
                        }
                    }
                    optionContainer.appendChild(checkbox);
                    label.innerText = answer.text;
                    label.htmlFor = id;
                    label.style.cursor = "pointer";
                    addStyles({
                        margin: "8px"
                    }, label);
                    optionContainer.appendChild(label);
                    checkboxContainer.appendChild(optionContainer);
                });
                return checkboxContainer;
            }

            function buildOuterContainer(configs) {
                var containerNode, id = configs.uniqueSurveyId,
                    name = "outerContainer";
                containerNode = createElement("form", id + "_" + name);
                containerNode.setAttribute("onsubmit", "event.preventDefault();");
                if (configs.type === "modal") {
                    if (configs.placement === "center") {
                        containerNode.setAttribute("tabindex", "0");
                        addStyles({
                            "margin": "auto",
                            "position": "fixed",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)",
                        }, containerNode);
                    }
                }
                addStyles(configs[name].styles, containerNode);
                if (configs.zindex) {
                    addStyles({
                        "z-index": configs.zindex
                    }, containerNode)
                }
                return containerNode;
            }

            function buildImageContainer(configs) {
                var containerNode, id = configs.uniqueSurveyId,
                    name = "imageContainer",
                    imageUrl = configs.imageUrl,
                    altText = configs.altText;
                if (isInvalidImageUrl(configs.imageUrl)) {
                    imageUrl = "data:image/jpg,"
                    altText = "Invalid image"
                }
                if (configs.type === "modal" || configs.type === "embedded") {
                    containerNode = createElement("div", id + "_" + name);
                    addStyles(configs[name].styles, containerNode);
                    let imageContainer = createElement("img", id + "_" + name + "_image")
                    addStyles(configs["imageNode"].styles, imageContainer);
                    imageContainer.src = imageUrl;
                    imageContainer.alt = altText;
                    containerNode.appendChild(imageContainer);
                }
                return containerNode;
            }

            function buildInnerContainer(configs) {
                var containerNode, id = configs.uniqueSurveyId,
                    name = "innerContainer";
                if (configs.type === "modal" || configs.type === "embedded") {
                    containerNode = createElement("div", id + "_" + name);
                    addStyles(configs[name].styles, containerNode);
                }
                return containerNode;
            }

            function buildHeader(configs) {
                var containerNode, uniqueSurveyId = configs.uniqueSurveyId,
                    surveyId = configs.surveyId,
                    trackType = configs.trackType,
                    name = "headerContainer",
                    headerContentContainer, headerTitleNode, headerTextNode;
                containerNode = createElement("div", uniqueSurveyId + "_" + name);
                addStyles(configs[name].styles, containerNode);
                headerContentContainer = createElement("div", uniqueSurveyId + "_headerContentContainer");
                addStyles({
                    "width": "95%"
                }, headerContentContainer);
                headerTitleNode = createElement("h1", uniqueSurveyId + "_headerTitle");
                addStyles(configs["headerTitle"].styles, headerTitleNode);
                if (configs.headerTitle.content.text) {
                    headerTitleNode.innerText = configs.headerTitle.content.text;
                }
                headerContentContainer.appendChild(headerTitleNode);
                headerTextNode = createElement("p", uniqueSurveyId + "_headerText");
                addStyles(configs["mainBodyText"].styles, headerTextNode);
                if (configs.mainBodyText.content.text) {
                    headerTextNode.innerText = configs.mainBodyText.content.text;
                }
                headerContentContainer.appendChild(headerTextNode);
                containerNode.appendChild(headerContentContainer);
                containerNode.appendChild(createCloseButton(uniqueSurveyId, surveyId, trackType));
                return containerNode;
            }

            function buildBody(configs) {
                var containerNode, id = configs.uniqueSurveyId,
                    name = "bodyContainer";
                containerNode = createElement("div", id + "_" + name);
                addStyles(configs[name].styles, containerNode);
                if (u.data.questionText || configs.questions || Object.keys(configs.questions).length > 0) {
                    Object.keys(configs.questions).forEach(function(questionId) {
                        containerNode.appendChild(createQuestion(configs.questions, questionId));
                        containerNode.appendChild(createAnswers(configs.questions, questionId));
                    });
                }
                return containerNode;
            }

            function buildFooter(configs) {
                var containerNode, id = configs.uniqueSurveyId,
                    name = "footerContainer",
                    url = configs.redirect_url,
                    trackType = configs.trackType;
                containerNode = createElement("div", id + "_" + name);
                addStyles(configs[name].styles, containerNode);
                containerNode.appendChild(createButton("primaryButton", id + "_" + "primaryButton", function() {
                    var formElem = document.getElementById(`${configs.uniqueSurveyId}_outerContainer`);

                    function submitSurvey() {
                        var trackObject = collectSurveyResults(configs);
                        trackObject.tealium_event = "momentsiq_submit";
                        trackObject.eventName = 'rm_shop_signup_panel_submitted', trackObject.momentsiq_id = configs.surveyId;
                        utag.track(trackType, trackObject);
                        if (url) {
                            configs.redirect_open_tab ? window.open(url) : window.location.assign(url);
                        }
                        document.querySelector('#royalmail_main_inquiry1034_question1_answerContainer').classList.add('hideThis');
                        document.querySelector('#rmShopSignUpPanelValidationError').classList.add('hideThis');
                        document.querySelector('#royalmail_main_inquiry1034_footerContainer').classList.add('hideThis');
                        setTimeout(function() {
                            document.querySelector('#royalmail_main_inquiry1034_question1_questionContainer').classList.add('displayBlock');
                            closeModal(id, "submit");
                        }, 100);
                    }
                    if (configs.answer_required) {
                        var enteredEmail = document.querySelector('#royalmail_main_inquiry1034_question1_answer1').value;
                        var invalidEmail = !/^[a-zA-Z0-9-=_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(enteredEmail);
                        if (!invalidEmail) {
                            submitSurvey();
                        } else {
                            return;
                        }
                    } else {
                        submitSurvey();
                    }
                }));
                return containerNode;
            }

            function buildInquiry(configs, data_layer) {
                var inquiry;
                u.mergeMappings(u.data, configs, data_layer);
                u.generateReplacements(data_layer, configs)
                var answerType = !u.isEmptyObject(configs.questions) ? configs.questions[`${configs.uniqueSurveyId}_question1`].answerType : "";
                if (configs.imageUrl) {
                    inquiry = buildImageStyledInquiry(configs);
                } else {
                    inquiry = buildOuterContainer(configs);
                    inquiry.appendChild(buildInnerContainer(configs));
                    var inquiryInnerContainer = inquiry.firstChild;
                    inquiryInnerContainer.appendChild(buildHeader(configs));
                    var signupBodyWrapper = document.createElement('div');
                    signupBodyWrapper.id = 'signupBodyWrapper';
                    signupBodyWrapper.appendChild(buildBody(configs));
                    if (answerType !== "button") {
                        signupBodyWrapper.appendChild(buildFooter(configs));
                    }
                    inquiryInnerContainer.appendChild(signupBodyWrapper);
                }
                addChangeEventListener()
                return inquiry;
            }

            function buildImageStyledInquiry(configs) {
                if (configs.imagePosition === "left" || configs.imagePosition === "right") {
                    configs.outerContainer.styles.width = u.data.outerContainer.width || "800px";
                    configs.outerContainer.styles.flexDirection = u.data.outerContainer.flexDirection || "row";
                    configs.outerContainer.styles.padding = u.data.outerContainer.padding || "0";
                    configs.innerContainer.styles.width = u.data.innerContainer.width || "100%";
                    configs.innerContainer.styles.padding = u.data.innerContainer.padding || "24px";
                    configs.bodyContainer.styles.minHeight = u.data.bodyContainer.minHeight || "10%";
                    configs.footerContainer.styles.width = u.data.footerContainer.width || "100%";
                    configs.primaryButton.styles.width = u.data.primaryButton.width || "100%";
                    configs.primaryButton.styles.textAlign = u.data.primaryButton.textAlign || "center";
                    configs.primaryButton.styles.display = u.data.primaryButton.display || "auto";
                    configs.primaryButton.styles.margin = u.data.primaryButton.margin || "10px 0 0 0";
                }
                var inquiryInnerContainer;
                var answerType = !u.isEmptyObject(configs.questions) ? configs.questions[`${configs.uniqueSurveyId}_question1`].answerType : "";
                var inquiry = buildOuterContainer(configs);
                if (configs.imagePosition === "left") {
                    inquiry.appendChild(buildImageContainer(configs));
                    inquiry.appendChild(buildInnerContainer(configs));
                    inquiryInnerContainer = inquiry.lastChild;
                } else if (configs.imagePosition === "right") {
                    configs.imageNode.styles.borderRadius = u.data.imageNode.borderRadius || "0 8px 8px 0";
                    inquiry.appendChild(buildInnerContainer(configs));
                    inquiry.appendChild(buildImageContainer(configs));
                    inquiryInnerContainer = inquiry.firstChild;
                }
                inquiryInnerContainer.appendChild(buildHeader(configs));
                inquiryInnerContainer.appendChild(buildBody(configs));
                if (answerType !== "button") {
                    inquiryInnerContainer.appendChild(buildFooter(configs));
                }
                return inquiry;
            }

            function attachInquiry(inquiryNode, placement, options) {
                var target;
                var container = document.querySelector(`#${inquiryNode.id}`);
                if (container) {
                    container.remove()
                }
                if (configs.type === "modal" && placement === "center") {
                    target = document.body;
                    target.appendChild(inquiryNode);
                } else if (configs.type === "embedded") {
                    target = document.querySelector(options.selector);
                    if (target && target.parentNode && options.position === "replace") {
                        target.parentNode.replaceChild(inquiryNode, target);
                    } else {
                        target.insertAdjacentElement(options.position, inquiryNode);
                    }
                }
                u.inquiryLoaded = true;
            }

            function getLocal(key) {
                var lsKey = "momentsiq_suppress";
                if (localStorage.getItem(lsKey)) {
                    var currentData = JSON.parse(localStorage.getItem(lsKey));
                    if (currentData[key]) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            function setLocal(key) {
                var lsKey = "momentsiq_suppress";
                var currentData = JSON.parse(localStorage.getItem(lsKey)) || {};
                if (configs.suppress !== "never") {
                    currentData[key] = {
                        type: configs.suppress
                    }
                    localStorage.setItem(lsKey, JSON.stringify(currentData));
                }
            }
            if (!u.inquiryLoaded) {
                if (getLocal(u.data.uniqueSurveyId)) {
                    return;
                } else {
                    attachInquiry(buildInquiry(configs, data_layer), configs.placement, {
                        position: configs.position,
                        selector: configs.selector
                    });
                    if (configs.trackLoad) {
                        utag.track(configs.trackType, {
                            tealium_event: "momentsiq_view",
                            eventName: 'rm_shop_signup_panel_loaded',
                            momentsiq_id: configs.surveyId
                        }, null, [933]);
                    }
                    if (configs.type === "modal" && configs.placement === "center") {
                        setTimeout(() => {
                            document.getElementById(configs.uniqueSurveyId + "_outerContainer").focus()
                        }, 50);
                    }
                }
            }
            utag.DB('send:1034:COMPLETE');
        };
        utag.o[loader].loader.LOAD(id);
    }('1034', 'royalmail.main'));
} catch (error) {
    utag.DB(error);
}