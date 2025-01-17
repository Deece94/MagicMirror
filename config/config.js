/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */

let config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert"
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "compliments",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "middle_center"
		},
		{
			module: "calendar",
			header: "Dylan's Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						url: "https://calendar.google.com/calendar/ical/deece.94%40gmail.com/public/basic.ics",
						symbol: "calendar"
					},
					// {
					// 	url: dylan_ical,
					// 	symbol: "calendar"
					// },
					// {
					// 	url: delta_ical,
					// 	symbol: "calendar"
					// },
					{
						url: "https://calendar.google.com/calendar/ical/en.australian%23holiday%40group.v.calendar.google.com/public/basic.ics",
						symbol: "calendar"
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "top_right",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "BBC News",
						url: "http://feeds.bbci.co.uk/news/world/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

		{
			module: "MMM-WordOfTheDay",
			position: "bottom_right",
			config: {
				updateInterval: 120000,
				headerText: "Word of the Day"
			}
		},
		{
			module: "DailyXKCD",
			position: "bottom_left",
			config: {
				invertColors: true,
				showTitle: true,
				showAltText: true
			}
		},

		{
			module: "MMM-Strava",
			position: "bottom_right",
			config: {
				client_id: "client_id",
				client_secret: "client_secret",
				mode: "chart",
				chartType: "bar",
				activities: ["run"],
				digits: 2
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
