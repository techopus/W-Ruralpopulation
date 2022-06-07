import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Chart from "./Chart";
import Total from "./Total";

import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

function Copyright() {
  // classes created for the footer
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://engaige.tech/">
          Handler Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

const drawerWidth = 0;
const countries = [
  "Aruba",
  "Afghanistan",
  "Angola",
  "Albania",
  "Andorra",
  "Arab World",
  "United Arab Emirates",
  "Argentina",
  "Armenia",
  "American Samoa",
  "Antigua and Barbuda",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Burundi",
  "Belgium",
  "Benin",
  "Burkina Faso",
  "Bangladesh",
  "Bulgaria",
  "Bahrain",
  "Bahamas, The",
  "Bosnia and Herzegovina",
  "Belarus",
  "Belize",
  "Bermuda",
  "Bolivia",
  "Brazil",
  "Barbados",
  "Brunei Darussalam",
  "Bhutan",
  "Botswana",
  "Central African Republic",
  "Canada",
  "Central Europe and the Baltics",
  "Switzerland",
  "Channel Islands",
  "Chile",
  "China",
  "Cote d'Ivoire",
  "Cameroon",
  "Congo, Dem. Rep.",
  "Congo, Rep.",
  "Colombia",
  "Comoros",
  "Cabo Verde",
  "Costa Rica",
  "Caribbean small states",
  "Cuba",
  "Curacao",
  "Cayman Islands",
  "Cyprus",
  "Czech Republic",
  "Germany",
  "Djibouti",
  "Dominica",
  "Denmark",
  "Dominican Republic",
  "Algeria",
  "East Asia & Pacific (excluding high income)",
  "Early-demographic dividend",
  "East Asia & Pacific",
  "Europe & Central Asia (excluding high income)",
  "Europe & Central Asia",
  "Ecuador",
  "Egypt, Arab Rep.",
  "Euro area",
  "Eritrea",
  "Spain",
  "Estonia",
  "Ethiopia",
  "European Union",
  "Fragile and conflict affected situations",
  "Finland",
  "Fiji",
  "France",
  "Faroe Islands",
  "Micronesia, Fed. Sts.",
  "Gabon",
  "United Kingdom",
  "Georgia",
  "Ghana",
  "Gibraltar",
  "Guinea",
  "Gambia, The",
  "Guinea-Bissau",
  "Equatorial Guinea",
  "Greece",
  "Grenada",
  "Greenland",
  "Guatemala",
  "Guam",
  "Guyana",
  "High income",
  "Hong Kong SAR, China",
  "Honduras",
  "Heavily indebted poor countries (HIPC)",
  "Croatia",
  "Haiti",
  "Hungary",
  "IBRD only",
  "IDA & IBRD total",
  "IDA total",
  "IDA blend",
  "Indonesia",
  "IDA only",
  "Isle of Man",
  "India",
  "Not classified",
  "Ireland",
  "Iran, Islamic Rep.",
  "Iraq",
  "Iceland",
  "Israel",
  "Italy",
  "Jamaica",
  "Jordan",
  "Japan",
  "Kazakhstan",
  "Kenya",
  "Kyrgyz Republic",
  "Cambodia",
  "Kiribati",
  "St. Kitts and Nevis",
  "Korea, Rep.",
  "Kuwait",
  "Latin America & Caribbean (excluding high income)",
  "Lao PDR",
  "Lebanon",
  "Liberia",
  "Libya",
  "St. Lucia",
  "Latin America & Caribbean",
  "Least developed countries: UN classification",
  "Low income",
  "Liechtenstein",
  "Sri Lanka",
  "Lower middle income",
  "Low & middle income",
  "Lesotho",
  "Late-demographic dividend",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Macao SAR, China",
  "St. Martin (French part)",
  "Morocco",
  "Monaco",
  "Moldova",
  "Madagascar",
  "Maldives",
  "Middle East & North Africa",
  "Mexico",
  "Marshall Islands",
  "Middle income",
  "Macedonia, FYR",
  "Mali",
  "Malta",
  "Myanmar",
  "Middle East & North Africa (excluding high income)",
  "Montenegro",
  "Mongolia",
  "Northern Mariana Islands",
  "Mozambique",
  "Mauritania",
  "Mauritius",
  "Malawi",
  "Malaysia",
  "North America",
  "Namibia",
  "New Caledonia",
  "Niger",
  "Nigeria",
  "Nicaragua",
  "Netherlands",
  "Norway",
  "Nepal",
  "Nauru",
  "New Zealand",
  "OECD members",
  "Oman",
  "Other small states",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Palau",
  "Papua New Guinea",
  "Poland",
  "Pre-demographic dividend",
  "Puerto Rico",
  "Korea, Dem. People’s Rep.",
  "Portugal",
  "Paraguay",
  "West Bank and Gaza",
  "Pacific island small states",
  "Post-demographic dividend",
  "French Polynesia",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "South Asia",
  "Saudi Arabia",
  "Sudan",
  "Senegal",
  "Singapore",
  "Solomon Islands",
  "Sierra Leone",
  "El Salvador",
  "San Marino",
  "Somalia",
  "Serbia",
  "Sub-Saharan Africa (excluding high income)",
  "South Sudan",
  "Sub-Saharan Africa",
  "Small states",
  "Sao Tome and Principe",
  "Suriname",
  "Slovak Republic",
  "Slovenia",
  "Sweden",
  "Swaziland",
  "Sint Maarten (Dutch part)",
  "Seychelles",
  "Syrian Arab Republic",
  "Turks and Caicos Islands",
  "Chad",
  "East Asia & Pacific (IDA & IBRD countries)",
  "Europe & Central Asia (IDA & IBRD countries)",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Turkmenistan",
  "Latin America & the Caribbean (IDA & IBRD countries)",
  "Timor-Leste",
  "Middle East & North Africa (IDA & IBRD countries)",
  "Tonga",
  "South Asia (IDA & IBRD)",
  "Sub-Saharan Africa (IDA & IBRD countries)",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Tuvalu",
  "Tanzania",
  "Uganda",
  "Ukraine",
  "Upper middle income",
  "Uruguay",
  "United States",
  "Uzbekistan",
  "St. Vincent and the Grenadines",
  "Venezuela, RB",
  "British Virgin Islands",
  "Virgin Islands (U.S.)",
  "Vietnam",
  "Vanuatu",
  "World",
  "Samoa",
  "Kosovo",
  "Yemen, Rep.",
  "South Africa",
  "Zambia",
  "Zimbabwe"
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    midWidth: 100 //styles the country for dropdown
  },

  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },


  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction for responsiveness of chart
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  //for the chart design and spacings
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  // added the footer class to push to bottom
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end"
  }
}));



export default function Dashboard() {
  const classes = useStyles();
  const [open] = React.useState(true);
  const [country, setCountry] = React.useState(null);


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>


          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          > 
            Dashboard
          
          </Typography>

          
        </Toolbar>
      </AppBar>

       <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}> 

            {/* Chart*/}
            <Grid item xs={12} md={8} lg={9}>
              <Paper>
                <FormControl className={classes.formControl}>
                  <InputLabel>Country</InputLabel>
                  <Select
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  >
                    {countries.map((country) => (
                      <MenuItem value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart country={country} />
              </Paper>
            </Grid>

              {/* Total */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Total />
              </Paper>
            </Grid>


          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
