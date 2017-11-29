import React from 'react';

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import FlexiblePlatform from "./components/FlexiblePlatform/FlexiblePlatform";
import Footer from "./components/Footer/Footer";


import Feature1 from "./img/feature1.png";
import Feature2 from "./img/feature2.png";
import HeroIcon320 from "./img/hero-icon-320px.png";
import IconBug from "./img/icon_bug.png";
import IconFlower from "./img/icon_flower.png";
import IconGear from "./img/icon_gear.png";
import IconLeaf from "./img/icon_leaf.png";
import IconNotebook from "./img/icon_notebook.png";
import IconPliers from "./img/icon_pliers.png";
import IconTombstone from "./img/icon_tombstone.png";
import IconTools from "./img/icon_tools.png";
import Phone from "./img/phone.png";


var heroContent = {
  title: "progress",
  text: "A new way for service providers and consumers track project profression.",
  image: HeroIcon320
};
var featureContent = {
  image1: Feature1,
  image2: Feature2,
  title1: "Track projects easily",
  description1: "Providers can give updates, share status, request updates, and require payments in one, efficient tool.Simples, easy, progress.",
  title2: "Clear communication",
  description2: "Progress allows direct communication bewtween the consumer and service provider. No more waiting for call backs, missing emails, or lost paperwork.",
  title3: "Estimate, approve, pay",
  description3: "The major steps of a service job are made simple with Progress. In one location, information and updates on project estimates and scopes of work are shared between provider and consumer."
};
var servicesContent = {
  title: "Bring Your Own Business",
  iconPliers: IconPliers,
  iconFlower: IconFlower,
  iconBug: IconBug,
  iconTools: IconTools,
  phone: Phone,
  iconTombstone: IconTombstone,
  iconNotebook: IconNotebook,
  iconGear: IconGear,
  iconLeaf: IconLeaf
};
var flexiblePlatformContent = {
  title: "Flexible Platform",
  text: "We are an industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their costumes.",
  buttonText: "invite me",
  twitterText: "Follow along on Twitter for all the latest news!",
  twitter: "@Progress_App",
};

var footerContent = {
  text: "© 2017 El Carrasco Design"
};

export default () => (
  <div className="App">
    <Hero content={heroContent} />
    <Features content={featureContent} />
    <Services content={servicesContent} />
    <FlexiblePlatform content={flexiblePlatformContent} />
    <Footer content={footerContent} />
  </div>
);