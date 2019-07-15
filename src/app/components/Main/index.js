import React from 'react';
import InfoContainer from '../InfoContainer';
import content from './data';
import './index.scss';
// console.log(profile);
// console.log(contacts);
function Item(data, index) {
  return (
    <li key={index}>
      {data.map(({ tag: Tag, ...rest }, contentIndex) => {
        const props = rest.target === '_blank' ? { ...rest, rel: 'noopener noreferrer' } : rest;
        return <Tag key={contentIndex} {...props} />;
      })}
    </li>
  );
}
// function LisItem({ label, text, href, target = '_self' }, index) {
//   const props = target === '_blank' ? { target, rel: 'noopener noreferrer' } : { target };
//   console.log(props);
//   return (
//     <li key={index}>
//       <label>{label}</label>
//       {href ? (
//         <a href={href} {...props}>
//           {text}
//         </a>
//       ) : (
//         <span>{text}</span>
//       )}
//     </li>
//   );
// }
function Main({ language }) {
  const { profile, contacts, skills, education, experience } = content[language];
  console.log(content);
  console.log(content[language]);
  return (
    <main className="Main">
      <section className="Main--section">
        <InfoContainer title={profile.title} className="Main--section-profile">
          <p>{profile.text}</p>
        </InfoContainer>
        <InfoContainer title={contacts.title} className="Main--section-contacts">
          <ul>{contacts.content.map(Item)}</ul>
        </InfoContainer>
        <InfoContainer title={skills.title} className="Main--section-skills">
          <ul>{skills.content.map(Item)}</ul>
        </InfoContainer>
      </section>
      <section className="Main--section">
        <InfoContainer title={education.title} className="Main--section-education">
          <ul>{education.content.map(Item)}</ul>
        </InfoContainer>
        <InfoContainer title={experience.title} className="Main--section-experience">
          <ul>{experience.content.map(Item)}</ul>
        </InfoContainer>
      </section>
    </main>
  );
}

export default Main;
