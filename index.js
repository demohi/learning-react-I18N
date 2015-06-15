/**
 * learning-react-I18N - index.js
 * Created by mds on 15/6/15.
 */

'use strict';


var React = require('react');

var Hello = require('./components/Hello');

var App = React.createClass({
    getDefaultProps: function () {
        return {}
    },
    render: function () {
        var intlData = {
            "locales": "ja-JP",
            "messages": {
                "photos": "{name}は{takenDate, date, long}に{numPhotos, plural,\n  =0 {1枚も写真を撮りませんでした。}\n  =1 {1枚写真を撮りました。}\n  other {#枚写真を撮りました。}\n}\n"
            }
        };
        return (
            <Hello {...intlData}/>
        )
    }
});

React.render(<App/>, document.body);