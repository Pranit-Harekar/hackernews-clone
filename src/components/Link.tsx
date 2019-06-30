import React, { Component } from 'react'
import { Feeds_feed_links as FeedLink } from './__generated__/Feeds'

class Link extends Component<{ link: FeedLink }> {
  render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }
}

export default Link
