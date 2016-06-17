/**
 * Created by songchao on 16/6/15.
 */

/*var User = {
 isLogin:false,
 name:"",
 tel:"",
 password:""
 };
 var a = 10;*/
/**
 * 顶部-用户信息部分
 */
var UserInfo = React.createClass({displayName: "UserInfo",
    getInitialState: function () {
        if (User.isLogin) {
            return {
                headimg: "../images/head.jpg",
                userName: "宋超",
                telephone: "15038290935"
            }
        } else {
            return {
                headimg: "../images/head.jpg",
                userName: "宋超",
                telephone: "15038290935"
            }
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "row user_info"}, 
                React.createElement("div", {className: "user_icon"}, 
                    React.createElement("img", {src: this.state.headimg})
                ), 
                React.createElement("p", {className: "user_name"}, this.state.userName), 
                React.createElement("p", {className: "user_tel"}, this.state.telephone)
            )
        )
    }
});

var SendExpressButton = React.createClass({displayName: "SendExpressButton",

    render: function () {
        return (
            React.createElement("div", {className: "col-xs-6 send_express_button"}, 
                React.createElement("div", {className: "send_icon_container"}, 
                    React.createElement("img", {src: "../images/main/send_express.png"})
                ), 
                React.createElement("p", {className: "send_express_text"}, "寄快递")
            )
        );
    }
});

var ExpressHistory = React.createClass({displayName: "ExpressHistory",
    render : function () {
        return (
            React.createElement("div", {className: "col-xs-6 express_history_container"}, 
                React.createElement("div", {className: "express_history_icon_container"}, 
                    React.createElement("img", {src: "../images/main/express_history.png"})
                ), 
                React.createElement("div", {className: "express_history_text"}, "历史记录")
            )
        );
    }
});

var ButtonContainer = React.createClass({displayName: "ButtonContainer",
    render: function () {
        return (
            React.createElement("div", {className: "row first_button_container"}, 
                React.createElement(SendExpressButton, null), 
                React.createElement(ExpressHistory, null)
            )
        );
    }
});

/**
 * 页面中间的主要内容
 */
var Main = React.createClass({displayName: "Main",
    render: function () {
        return (
            React.createElement("div", {className: "container main"}, 
                React.createElement(UserInfo, null), 
                React.createElement(ButtonContainer, null)
            )
        );
    }
});