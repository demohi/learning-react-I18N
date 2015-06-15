/**
 * learning-react-I18N - Hello.js
 * Created by mds on 15/6/15.
 */

'use strict';

var React = require('react');
var ReactIntl = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var FormattedDate = ReactIntl.FormattedDate;
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedMessage = ReactIntl.FormattedMessage;

var Hello = React.createClass({
    mixins: [IntlMixin],
    getDefaultProps: function () {
        return {}
    },
    render: function () {
        var postDate    = Date.now() - (1000 * 60 * 60 * 24);
        var commentDate = Date.now() - (1000 * 60 * 60 * 2);
        var meetingDate = Date.now() + (1000 * 60 * 51);
        return (
            <div>
                <FormattedNumber value={1000} style="currency" currency="USD" />
                <ul>
                    <li><FormattedNumber value={4200} /></li>
                    <li><FormattedNumber value={0.9} style="percent" /></li>
                    <li>
                        <FormattedNumber
                            value={99.95}
                            style="currency"
                            currency="USD" />
                    </li>
                </ul>
                <FormattedDate
                    value={new Date()}
                    day="numeric"
                    month="long"
                    year="numeric" />
                <ul>
                    <li><FormattedRelative value={postDate} units="minute"/></li>
                    <li><FormattedRelative value={commentDate} units="minute"/></li>
                    <li><FormattedRelative value={meetingDate} units="minute"/></li>
                </ul>
                <FormattedMessage
                    message={this.getIntlMessage('photos')}
                    name="Annie"
                    numPhotos={1000}
                    takenDate={Date.now()} />
            </div>
        )
    }
});

module.exports = Hello;

