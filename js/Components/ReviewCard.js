var React = require('react');
var cx = require('classnames');

var ReviewCard = React.createClass({
    getInitialState() {
        return {
            isFav: false,
            isUpvoted: false,
            isDownvoted: false
        }
    },
    propTypes: {
        review: React.PropTypes.string.isRequired,
        workload: React.PropTypes.string
    },
    trim(data, maxLength = 500) {
        if (data.length < maxLength) return data;
        let trimmedData = data.substr(0, maxLength);
        return trimmedData.substr(0, trimmedData.lastIndexOf(' ')) + " ...";
    },
    addToFav() {
        this.setState({ isFav: !this.state.isFav });
    },
    upVote() {
        this.setState({
            isUpvoted: !this.state.isUpvoted,
            isDownvoted: this.state.isDownvoted && !this.state.isDownvoted
        })
    },
    downVote() {
        this.setState({
            isUpvoted: this.state.isUpvoted && !this.state.isUpvoted,
            isDownvoted: !this.state.isDownvoted
        })
    },
    render() {
        var favClass = cx({
            'ion-ios-heart': true,
            'highlight': this.state.isFav
        });

        var upvoteClass = cx({
            'ion-thumbsup': true,
            'highlight': this.state.isUpvoted
        });

        var downvoteClass = cx({
            'ion-thumbsdown': true,
            'highlight': this.state.isDownvoted
        });

        return (
            <div className="reviewCard">
              <p> { this.trim(this.props.review) } </p>
              <div className="review-actions">
                <button className='button button-outlined'>Read More</button>
                <ul>
                    <li onClick={this.addToFav}>
                        <i className={favClass}></i>
                    </li>
                    <li onClick={this.upVote}>
                        <i className={upvoteClass}></i>
                    </li>
                    <li onClick={this.downVote}>
                        <i className={downvoteClass}></i>
                    </li>
                </ul>
              </div>
            </div>
        )
    }
});

module.exports = ReviewCard;
