import React, { useEffect, useState } from 'react';

import { About, Contact, Header, Skills, Testimonial, Work, Footer, Clients } from './container';
import { Navbar, Loader, SEO } from './components';
import './App.scss';

import { urlFor, client } from './client';
import { privacyTerm } from './constants'

const App = () => {
  const [company, setCompany] = useState([]);
  const [header, setHeader] = useState([]);
  const [seo, setSEO] = useState([]);
  const [term, setTerm] = useState([]);
  const [privacy, setPrivacy] = useState([]);
  const [loader, setLoader] = useState(true)

  // useEffect(() => {
  //   const companyQuery = '*[_type == "company"]';
  //   const headerQuery = '*[_type == "header"]';
  //   const seoQuery = '*[_type == "seo"]';
  //   const termQuery = '*[_type == "term"]';
  //   const privacyQuery = '*[_type == "privacy"]';

  //   const Fetch = async () => {
  //     const companyResult = client.fetch(companyQuery).then((data) => data);
  //     const headerResult = client.fetch(headerQuery).then((data) => data);
  //     const seoResult = client.fetch(seoQuery).then((data) => data);
  //     const termResult = client.fetch(termQuery).then((data) => data);
  //     const privacyResult = client.fetch(privacyQuery).then((data) => data);

  //     const allData = Promise.all([
  //       companyResult,
  //       headerResult,
  //       seoResult,
  //       termResult,
  //       privacyResult]);

  //     const [company, header, seo, term, privacy] = await allData;

  //     setCompany(company[0]);
  //     setHeader(header[0]);
  //     setSEO(seo[0]);
  //     setTerm(term);
  //     setPrivacy(privacy);
  //     setLoader(false)
  //   }
  //   Fetch();
  // }, []);

  if (loader) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    )
  }

  console.log(term)

  return (
    <div className="app">
      <SEO seo={seo} />
      <Navbar logo={urlFor(company.logoUrl)} />
      <Header header={header} />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Clients />
      <Contact mail={company.mail} phone={company.phone} />
      <Footer
        url={urlFor}
        company={company}
        term={term.length > 0 ? term : privacyTerm.term}
        privacy={privacy.length > 0 ? privacy : privacyTerm.privacy} />
    </div>
  )
};

export default App;
