// import fetch from "node-fetch"; // esmodules
const fetch = require("node-fetch-commonjs"); // commonjs

// const $ = require("jquery");
const { parse } = require("node-html-parser");

const hotels = {};

async function getInitialBookingData() {
  const message = await fetch(
    "https://www.booking.com/searchresults.es.html?label=gen173nr-1DCAEoggI46AdIM1gEaAyIAQGYAQq4AQfIAQzYAQPoAQGIAgGoAgO4Avqiw44GwAIB0gIkNzNlMDhlNjItZTAwYi00NTkyLThhMWYtODQ2ZjAyYWY5YTZj2AIE4AIB&lang=es&sid=33d3a998e7285ac48cdc7b08a98f4eea&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.es.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaAyIAQGYAQq4AQfIAQzYAQPoAQGIAgGoAgO4Avqiw44GwAIB0gIkNzNlMDhlNjItZTAwYi00NTkyLThhMWYtODQ2ZjAyYWY5YTZj2AIE4AIB%3Bsid%3D33d3a998e7285ac48cdc7b08a98f4eea%3Bsb_price_type%3Dtotal%26%3B&ss=Villa+La+Angostura&is_ski_area=0&ssne=Villa+La+Angostura&ssne_untouched=Villa+La+Angostura&dest_id=-1018998&dest_type=city&checkin_year=2022&checkin_month=5&checkin_monthday=2&checkout_year=2022&checkout_month=5&checkout_monthday=4&group_adults=4&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1"
  );
  // console.log(message.text());
  const mess = await message.text();
  // console.log(mess);
  // console.log($);
  const test = parse(mess);
  console.log(test.querySelector("[data-testid=title]"));
  // const title = $.html("[data-testid=title]");

  hotels["title"] = parse("[data-testid=title]");
  console.log(hotels);
}

getInitialBookingData();
