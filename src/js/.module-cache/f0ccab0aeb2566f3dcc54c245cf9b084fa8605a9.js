/**
 * Created by songchao on 16/6/14.
 */
var Content = React.createClass({displayName: "Content",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(NavBar, null)
            )
        )
    }
});
/**
 * 分发组件到dom树
 */
ReactDOM.render(
    React.createElement(Content, null),
    document.getElementById("content")
);