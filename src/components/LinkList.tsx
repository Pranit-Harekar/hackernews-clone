import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Feeds, Feeds_feed_links as FeedLink } from './__generated__/Feeds'

const FEED_QUERY = gql`
  query Feeds {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

class LinkList extends Component {
  render() {
    return (
      <Query<Feeds> query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const linksToRender = data!.feed.links

          return (
            <div>
              {linksToRender.map((link: FeedLink) => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList
