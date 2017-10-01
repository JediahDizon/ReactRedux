import React, { Component } from "react";
import { connect } from "react-redux";

// COMPONENT
import LoadFeeds from "./LoadFeeds";

// STYLE
import { TabContent, TabPane, Nav, NavItem, NavLink,
	Row, Col,
	Card, CardText, CardBlock, CardTitle, CardSubtitle, CardImg,
	Form, FormGroup, Label,
	Input } from "reactstrap";
import FontAwesome from "react-fontawesome";

import DOMPurify from "dompurify";

//DATE & TIME
import Moment from "react-moment";

export default class Feeds extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			nav: {
				activeTab: '1'
			},
			loading: false
		};
	}
	componentWillReceiveProps() {
		this.setState({loading: false});
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				nav: {
					activeTab: tab
				},
				loading: true
			});
		}
	}

	renderFeeds() {
		const feedsList = this.props.feeds
		if(feedsList) {
			return (
				feedsList.map((feeds, index) => {
					return (
						<div key={ index }>
							<br />
							<Row {...{ noGutters: true }}>
								<Col xs="3">
									<img className="img-fluid" src={ feeds.feed.image } />
								</Col>
								<Col xs={{ size: "8", offset: 1 }}>
									{ feeds.feed.title }
									{ feeds.feed.description }
								</Col>
							</Row>
							<hr />
							{ feeds.items.map((feed, index) => {
								return (
									<Row key={ index } {...{ noGutters: true }}>
										<Col xs="12" sm="3">
											<img className="img-fluid" src={ feed.enclosure.link } />
										</Col>
										<Col xs="12" sm={{ size: "8", offset: 1 }}>
											<h4>{ feed.title }</h4>
											<CardText dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(feed.description)}}>
											</CardText>
										</Col>
										<Col xs="12">
											<hr />
										</Col>
									</Row>
								);
							})}
						</div>
					)
				})
			);
		}
	}

	render() {
		const rssFeedUrls = [{
			title: "CTV News",
			url: "http://ctvnews.ca/rss/TopStories"
		}, {
			title: "Tech Crunch",
			url: "https://techcrunch.com/feed/"
		}, {
			title: "Equestria Daily",
			url: "https://EquestriaDaily.com/feeds/posts/default"
		}];

		return (
			<Card>
				<CardBlock>
					<CardTitle>
					RSS Feed
					{
						this.state.loading ?
							<span> <FontAwesome
							name='circle-o-notch'
							spin
							/></span>
						: null
					}
					</CardTitle>

					<Nav tabs>
						{ rssFeedUrls.map((rssFeedUrl, index) => {
							return(
								<NavItem key={ index }>
									<NavLink style={{ padding: 0 }} className={ this.state.nav.activeTab === index ? "active" : ""}
										onClick={() => { this.toggle(index); }}>
										<LoadFeeds rssUrl={ rssFeedUrl.url } title={ rssFeedUrl.title } />
									</NavLink>
								</NavItem>
							)
						})}
					</Nav>

				 	<TabContent activeTab={ this.state.nav.activeTab }>
						{ rssFeedUrls.map((rssFeedUrl, index) => {
							return (
								<TabPane key={ index }tabId={ index }>
									<Row {...{noGutters: true }}>
										<Col sm="12">
											{ this.renderFeeds() }
										</Col>
									</Row>
								</TabPane>
							)})
						}
					</TabContent>
				</CardBlock>
			</Card>
		)
	}
}
