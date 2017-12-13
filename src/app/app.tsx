import * as React from 'react';
import { Header, Welcome, About, Hobbies, Skills, Timeline, Contact } from './components/components';

export class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        <Welcome />
        <About />
        <Hobbies />
        <Skills />
        <Timeline />
        <Contact />
      </div>
    );
  }
}