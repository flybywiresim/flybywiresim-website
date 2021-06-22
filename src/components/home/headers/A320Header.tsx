import Link from 'next/link';
import { Button } from '../../utils/Button';
import { installerRef } from '../Installer';
import Container from '../../utils/Container';

export const A320Header = () => {
    const handleClick = () => {
        if (installerRef.current) {
            installerRef.current.scrollIntoView({ block: 'center' });
        }
    };

    return (
        <header className="min-h-screen">
            <video
                className="fixed w-screen h-screen object-cover opacity-10"
                src="https://cdn.flybywiresim.com/assets/website/video/A32NX.mp4"
                playsInline
                autoPlay
                muted
                loop
            />
            <Container className="max-w-6xl">
                <div className="absolute h-2/3 bottom-0">
                    <h1 className="text-7xl sm:text-8xl font-medium pb-3">
                        <span className="text-blue-light">A32</span>
                        <span className="text-blue">N</span>
                        X
                    </h1>
                    <p className="text-lg max-w-xl">
                        A community built and maintained project aiming to provide high quality and detailed aircraft
                        for Microsoft Flight Simulator.
                    </p>
                    <div className="flex max-w-md py-5">
                        <Button
                            onClick={handleClick}
                            className="w-40 text-xl font-bold bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3"
                        >
                            Installer
                        </Button>

                        <Link href="/a32nx">
                            <Button
                                className="w-44 text-xl font-bold border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};
