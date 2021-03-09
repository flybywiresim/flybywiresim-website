import React from 'react';
import './App.css';
import { NavBar } from './components/utils/NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Header } from './components/home/Header';
import { Installer } from './components/home/Installer';
import { Community } from './components/home/Community';
import { Discord } from './components/home/Discord';
import { PartnerSection } from './components/home/PartnerSection';
import { Donate } from './components/home/Donate';

import { Error404 } from './components/utils/Error404';

import { TermsOfService } from './components/legal/TermsOfService';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';

import { FullscreenMap } from './components/map/FullscreenMap';

import { A32NX } from './components/projects/A32NX';
import { Features } from './components/projects/Features';
import { ExtendedFeatures } from './components/projects/ExtendedFeatures';
import { Download } from './components/projects/Download';

import ScrollToTop from './ScrollToTop';
import { Footer } from './components/utils/Footer';

function App(): JSX.Element {

    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Switch>
                <Route exact path="/projects">
                    <A32NX />
                    <Features />
                    <ExtendedFeatures />
                    <Download />
                    <Footer />
                </Route>
                <Route exact path="/">
                    <Header />
                    <Installer />
                    <Discord />
                    <Community />
                    <PartnerSection />
                    <Donate />
                    <Footer />
                </Route>
                <Route exact path="/tos">
                    <TermsOfService />
                    <Footer />
                </Route>
                <Route exact path="/privacy">
                    <PrivacyPolicy />
                    <Footer />
                </Route>
                <Route exact path="/map">
                    <FullscreenMap />
                </Route>
                <Route component={Error404} />
            </Switch>
        </Router>
    );
}

export default App;
