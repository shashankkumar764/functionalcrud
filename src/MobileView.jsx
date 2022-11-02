import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MobileView = () => {
  var data = [
    {
      name: "APPLY",
      items: [
        {
          name: "Banking and Financial Products",
          Image: "img/ServiceDigitisation/ApplyBankingProducts.png",
          JourneyLink: "#",
          Desc: "For Accounts Loans, Cards & more",
        },
        {
          name: "Government Sponsored Scheme",
          JourneyLink: "#",
          Image: "img/ServiceDigitisation/u55.png",
          Desc: "Loans for Education, Agri, Business,Livelihood & more",
        },
        {
          name: "Government Social Security Schemes",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Apply Online for a vaiety of social security schemes",
        },
        {
          name: "FASTag",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Buy Recharge FASTag to make toll payments",
        },
      ],
    },
    {
      name: "SERVICES",
      items: [
        {
          name: "Account & loan Services",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Access Accounts & Loan-related services",
        },
        {
          name: "Query / Feedback / Complaint",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Reach out to us. We're listening",
        },
        {
          name: "DigiSaathi",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Helpline for information on digital payment products and services",
        },
        {
          name: "Customer Learning Centre",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "A comprehensive guide  to Banking & Finance",
        },
      ],
    },
    {
      name: "EXPLORE",
      items: [
        {
          name: "HDFC Bank NetBanking",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Access banking services 24*7",
        },
        {
          name: "Pay All Bills with BillPay",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "Services regarding accounts, loans, cards etc",
        },
        {
          name: "SmartBuy shopping Deals",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "For fabulous shopping at great prices",
        },
        {
          name: "Download HDFC Bank Apps",
          Image: "img/ServiceDigitisation/u55.png",
          JourneyLink: "#",
          Desc: "To bank and make payments on the go",
        },
      ],
    },
  ];
  return (
    <>
      <Tabs>
        <TabList>
          {data.map((value) => {
            return <Tab> {value.name}</Tab>;
          })}
        </TabList>

        {data.map((value) => {
          return (
            <TabPanel>
              {value.items.map((child) => {
                var anchorTag =
                  child.JourneyLink !== "" ? (
                    <a href="https://www.google.com">
                      <div
                        style={{
                          display: "flex",
                          // flexWrap: "wrap",
                          backgroundColor: "#fff",
                          minHeight: "160px",
                          maxWidth: "360px",
                          padding: "23px",
                          margin: "0px 5px 20px",
                          borderRadius: "20px",
                          boxShadow: "rgb(0 0 0 / 5%) 0px 20px 20px",
                          width: "100%",
                        }}
                      >
                        <div style={{ width: "30%" }}>
                          <img
                            src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_640.png"
                            alt="smiely"
                            width="80px"
                            height="80px"
                            style={{
                              paddingRight: "10px",
                              margin: "-12px 0px 0px",
                            }}
                          />
                        </div>
                        <div>
                          <div>
                            <span
                              style={{
                                color: "rgb(17, 24, 39)",
                                fontFamily: "open-sans-bold6",
                                fontSize: "22px",
                                lineHeight: "27px",
                              }}
                            >
                              {child.name}{" "}
                            </span>
                          </div>
                          <div style={{ paddingTop: "5%" }}>
                            <span
                              style={{
                                color: "rgb(107, 114, 128)",
                                lineHeight: "22px",
                                fontSize: "16px",
                              }}
                            >
                              {" "}
                              {child.Desc}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div>
                      <img
                        width="200px"
                        height="200px"
                        src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_640.png"
                        alt="smiely"
                      />
                      <p>{child.name}</p>
                      <p>{child.Desc}</p>
                    </div>
                  );

                return <div>{anchorTag}</div>;
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
};
export default MobileView;
