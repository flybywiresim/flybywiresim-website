import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';
import CountTo from "react-count-to";

function Downloads() {
    const [downloads, setDownloads] = useState();
    const [postFix, setPostFix] = useState("");

    async function getDownloads() {
        try {
            const request = await fetch('https://api.github.com/repos/flybywiresim/a32nx/releases');
            const reqJson = await request.json();

            const downloads = [];

            reqJson.map(item => {
                item.assets.map(download => {
                    downloads.push(download.download_count);
                });
            });

            let totalDownloads = 0;
            downloads.map(num => {
                totalDownloads += num;
            });

            if (totalDownloads >= 1000) {
                totalDownloads = Math.floor(totalDownloads / 1000);
                setPostFix("K");
            }

            if (totalDownloads) {
                setDownloads(totalDownloads);
            }
        } catch {}
    }

    useEffect(() => {
        const interval = setInterval(() => getDownloads(), 600000);
        getDownloads();
        return () => {
            clearInterval(interval);
        };
    })

    const fn = value => <h1>{value + postFix}</h1>;
    return (
        <CountTo to={Number(downloads)} speed={2000}>{fn}</CountTo>
    );
}

const container = document.getElementById('downloads');

if (container) {
    ReactDOM.render(<Downloads />, container);
}
