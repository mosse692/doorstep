"use client";

import { useState, useEffect } from "react";
import AskDoorstep from "@/components/AskDoorstep";
import Discover from "@/components/Discover";
import ListProperty from "@/components/ListProperty";
import Search from "@/components/Search";
import Section from "@/components/Section";

const page = () => {
  const [images, setImages] = useState([]);
  const [images1, setImages1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = (url, fn) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const groupedData = groupByPropertyId(data);
        fn(groupedData);
        setLoading(false);
        // console.log(data)
        // console.log(groupedData)
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    data("http://localhost:3000/api/forRent", setImages);
    data("http://localhost:3000/api/forSale", setImages1);
  }, []);

  const groupByPropertyId = (data) => {
    return Object.values(
      data.reduce((acc, obj) => {
        const propertyId = obj.property_id;
        if (!acc[propertyId]) {
          acc[propertyId] = [];
        }
        acc[propertyId].push(obj);
        return acc;
      }, {})
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Search />
      <ListProperty purpose={"Rent"} pics={images} />
      <ListProperty purpose={"Sale"} pics={images1} />
      <Section />
      <AskDoorstep />
      <Discover />
    </>
  );
};

export default page;
