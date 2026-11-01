import React from 'react';
import Section from './Section';
import { news } from '../data';

function News() {
  return (
    <Section id="news" title="News">
      <ul className="news">
        {news.map((n, i) => (
          <li key={i}>
            <span className="news-date">{n.date}</span>
            <span>{n.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default News;
