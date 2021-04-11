import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from './Dropdown';

export type InternalLinkProps = { name: string, path: string }

export const PageLink: React.FC<InternalLinkProps> = ({ name, path }) => (
    <Link
        className="text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light"
        key={name}
        to={path}
    >
        {name}
    </Link>
);

export type ExternalLinkProps = { name: string, external: string }

export const WebLink: React.FC<ExternalLinkProps> = ({ name, external }) => (
    <a
        key={name}
        href={external}
        target="_blank"
        rel="noreferrer"
        className="text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light"
    >
        {name}
    </a>
);

export type NavLinksProps = { className?: string }

export const NavLinks: React.FC<NavLinksProps> = ({ className }) => (
    <div className={`flex flex-col ${className}`}>
        <PageLink name="Home" path="/" />
        <PageLink name="Projects" path="/a32nx" />
        <WebLink name="Documentation" external="https://docs.flybywiresim.com/" />
        <PageLink name="Map" path="/map" />
        <Dropdown className="-ml-1.5" titleName="Community">
            <DropdownItem>
                <WebLink name="Discord" external="https://discord.gg/flybywire" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="Twitter" external="https://facebook.com/FlybywireSimulations/" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="Facebook" external="https://facebook.com/FlybywireSimulations/" />
            </DropdownItem>
            <DropdownItem>
                <WebLink name="YouTube" external="https://www.youtube.com/FlyByWireSimulations" />
            </DropdownItem>
        </Dropdown>
    </div>
);

export type HamburgerProps = { handleClick: () => void }

export const Hamburger: React.FC<HamburgerProps> = ({ handleClick }) => (
    <a onClick={handleClick} className="cursor-pointer">
        <FontAwesomeIcon icon={faBars} size="2x" />
    </a>
);
