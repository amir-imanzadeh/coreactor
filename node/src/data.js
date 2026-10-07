import express from "express";
const app = express();
const port = 3010;
const addres = `/databases/data`



export function site_theme(network_status){
    return (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Coreactor</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            min-height: 100%;
        }

        body {
            background:
                radial-gradient(
                    circle at 50% 38%,
                    rgba(52, 73, 94, 0.22),
                    transparent 34%
                ),
                linear-gradient(
                    180deg,
                    #07090c 0%,
                    #0b0e12 45%,
                    #111419 100%
                );

            color: #e9edf2;
            font-family:
                Inter,
                ui-sans-serif,
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                sans-serif;

            overflow-x: hidden;
        }

        /* --------------------------------
           URBAN BACKGROUND
        -------------------------------- */

        .scene {
            position: relative;
            min-height: 100vh;
            overflow: hidden;
        }

        .scene::before {
            content: "";
            position: absolute;
            inset: 0;

            background:
                linear-gradient(
                    115deg,
                    transparent 0 42%,
                    rgba(255,255,255,0.035) 42.1%,
                    transparent 42.5%
                ),
                linear-gradient(
                    65deg,
                    transparent 0 55%,
                    rgba(255,255,255,0.025) 55.1%,
                    transparent 55.5%
                );

            pointer-events: none;
        }

        .scene::after {
            content: "";
            position: absolute;
            left: -10%;
            right: -10%;
            bottom: 15%;

            height: 1px;

            background: linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.13),
                transparent
            );

            box-shadow:
                0 0 25px rgba(255,255,255,0.04);

            pointer-events: none;
        }

        /* --------------------------------
           CONCRETE / BRIDGE STRUCTURES
        -------------------------------- */

        .bridge {
            position: absolute;
            left: -5%;
            right: -5%;
            top: 5%;

            height: 110px;

            background:
                linear-gradient(
                    180deg,
                    #181c21,
                    #101317
                );

            transform: rotate(-1.2deg);

            border-top:
                1px solid rgba(255,255,255,0.08);

            border-bottom:
                5px solid #080a0d;

            box-shadow:
                0 25px 70px rgba(0,0,0,0.7);

            opacity: 0.9;
        }

        .bridge::after {
            content: "";

            position: absolute;
            left: 8%;
            right: 8%;
            bottom: -18px;

            height: 18px;

            background:
                repeating-linear-gradient(
                    90deg,
                    transparent 0 120px,
                    rgba(255,255,255,0.035) 121px 123px
                );
        }

        .pillar {
            position: absolute;

            top: 0;
            bottom: 0;

            width: 90px;

            background:
                linear-gradient(
                    90deg,
                    #0b0d10,
                    #171b20 50%,
                    #0a0c0f
                );

            opacity: 0.65;
        }

        .pillar.left {
            left: 8%;
        }

        .pillar.right {
            right: 12%;
        }

        /* --------------------------------
           LIGHTS
        -------------------------------- */

        .street-light {
            position: absolute;

            width: 7px;
            height: 7px;

            border-radius: 50%;

            background: #d8b978;

            box-shadow:
                0 0 12px rgba(216,185,120,0.7),
                0 0 40px rgba(216,185,120,0.18);

            opacity: 0.75;
        }

        .light-1 {
            top: 24%;
            left: 13%;
        }

        .light-2 {
            top: 30%;
            right: 18%;
        }

        .light-3 {
            bottom: 24%;
            left: 23%;
        }

        .light-4 {
            bottom: 18%;
            right: 29%;
        }

        /* --------------------------------
           CONTENT
        -------------------------------- */

        .content {
            position: relative;
            z-index: 10;

            min-height: 100vh;

            display: flex;
            flex-direction: column;

            padding:
                34px
                clamp(24px, 7vw, 110px)
                30px;
        }

        /* --------------------------------
           HEADER
        -------------------------------- */

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            height: 50px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;

            font-weight: 700;
            letter-spacing: 0.04em;
        }

        .brand-mark {
            width: 34px;
            height: 34px;

            display: grid;
            place-items: center;

            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 9px;

            background:
                linear-gradient(
                    145deg,
                    #202831,
                    #0b0e12
                );

            color: #69b9ff;

            font-size: 14px;

            box-shadow:
                inset 0 0 20px rgba(70,150,220,0.08);
        }

        .brand-name {
            font-size: 15px;
        }

        .brand-subtitle {
            color: #68727e;
            font-size: 11px;
            margin-left: 3px;
        }

        .version {
            color: #68727e;
            font-size: 11px;
            letter-spacing: 0.1em;
        }

        /* --------------------------------
           HERO
        -------------------------------- */

        .hero {
            width: min(900px, 100%);

            margin:
                clamp(90px, 13vh, 145px)
                auto
                0;

            text-align: center;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 9px;

            color: #75818d;

            font-size: 11px;
            letter-spacing: 0.22em;
            text-transform: uppercase;

            margin-bottom: 22px;
        }

        .eyebrow-dot {
            width: 6px;
            height: 6px;

            border-radius: 50%;

            background: #55a9ff;

            box-shadow:
                0 0 14px rgba(85,169,255,0.8);
        }

        h1 {
            font-size:
                clamp(58px, 10vw, 128px);

            line-height: 0.86;

            letter-spacing: -0.075em;

            font-weight: 700;

            background:
                linear-gradient(
                    180deg,
                    #ffffff 0%,
                    #aeb8c2 52%,
                    #68727c 100%
                );

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;

            text-shadow:
                0 30px 70px rgba(0,0,0,0.5);
        }

        .hero-description {
            max-width: 620px;

            margin: 30px auto 0;

            color: #8b96a2;

            font-size: 15px;
            line-height: 1.9;
        }

        .hero-description strong {
            color: #d6dce2;
            font-weight: 500;
        }

        /* --------------------------------
           CENTRAL LINE
        -------------------------------- */

        .system-line {
            position: relative;

            width: min(1050px, 100%);

            height: 1px;

            margin:
                clamp(80px, 11vh, 125px)
                auto
                0;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,255,255,0.15) 12%,
                    rgba(255,255,255,0.15) 88%,
                    transparent
                );
        }

        .system-line::before {
            content: "";

            position: absolute;

            left: 50%;
            top: 50%;

            width: 9px;
            height: 9px;

            transform: translate(-50%, -50%);

            border-radius: 50%;

            background: #62b5ff;

            box-shadow:
                0 0 0 5px rgba(98,181,255,0.05),
                0 0 25px rgba(98,181,255,0.65);
        }

        .system-line-label {
            position: absolute;

            left: 50%;
            top: -27px;

            transform: translateX(-50%);

            color: #4e5964;

            font-size: 9px;

            letter-spacing: 0.2em;
            text-transform: uppercase;

            white-space: nowrap;
        }

        /* --------------------------------
           OPERATION CARDS
        -------------------------------- */

        .operations {
            width: min(1050px, 100%);

            margin: 34px auto 0;

            display: grid;

            grid-template-columns:
                repeat(4, 1fr);

            gap: 12px;
        }

        .operation {
            position: relative;

            padding: 20px 19px;

            min-height: 128px;

            background:
                linear-gradient(
                    145deg,
                    rgba(29,34,40,0.82),
                    rgba(12,15,18,0.92)
                );

            border:
                1px solid rgba(255,255,255,0.07);

            border-radius: 13px;

            box-shadow:
                0 18px 45px rgba(0,0,0,0.25),
                inset 0 1px rgba(255,255,255,0.025);

            transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                background 0.25s ease;
        }

        .operation:hover {
            transform: translateY(-5px);

            border-color:
                rgba(98,181,255,0.2);

            background:
                linear-gradient(
                    145deg,
                    rgba(32,39,47,0.95),
                    rgba(12,15,18,0.95)
                );
        }

        .operation-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .operation-icon {
            width: 29px;
            height: 29px;

            display: grid;
            place-items: center;

            border-radius: 8px;

            background: rgba(255,255,255,0.045);

            color: #8dbce5;

            font-size: 11px;
        }

        .status {
            width: 6px;
            height: 6px;

            border-radius: 50%;

            background: #4fbd8a;

            box-shadow:
                0 0 12px rgba(79,189,138,0.6);
        }

        .operation h3 {
            margin-top: 17px;

            font-size: 13px;

            font-weight: 600;

            color: #d9dfe5;
        }

        .operation p {
            margin-top: 7px;

            color: #66717d;

            font-size: 10px;

            line-height: 1.6;
        }

        .operation-code {
            margin-top: 13px;

            color: #53606b;

            font-family:
                "SFMono-Regular",
                Consolas,
                monospace;

            font-size: 9px;
        }

        /* --------------------------------
           FOOTER STATUS
        -------------------------------- */

        .bottom {
            margin-top: auto;

            padding-top: 35px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #515c67;

            font-size: 10px;
        }

        .status-line {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .online {
            width: 5px;
            height: 5px;

            border-radius: 50%;

            background: #4fbd8a;

            box-shadow:
                0 0 10px rgba(79,189,138,0.7);
        }

        .bottom-right {
            font-family:
                "SFMono-Regular",
                Consolas,
                monospace;

            opacity: 0.7;
        }

        /* --------------------------------
           RESPONSIVE
        -------------------------------- */

        @media (max-width: 800px) {

            .content {
                padding:
                    25px
                    20px
                    22px;
            }

            .bridge {
                top: 8%;
            }

            .pillar {
                width: 50px;
            }

            .operations {
                grid-template-columns:
                    repeat(2, 1fr);
            }

            .hero {
                margin-top: 100px;
            }

            .system-line {
                margin-top: 80px;
            }
        }

        @media (max-width: 500px) {

            header {
                height: 42px;
            }

            .brand-subtitle,
            .version {
                display: none;
            }

            h1 {
                font-size: 64px;
            }

            .hero-description {
                font-size: 13px;
            }

            .operations {
                grid-template-columns: 1fr;
            }

            .operation {
                min-height: 105px;
            }

            .bottom {
                flex-direction: column;
                gap: 12px;

                align-items: flex-start;
            }
        }
    </style>
</head>

<body>

<div class="scene">

    <div class="bridge"></div>

    <div class="pillar left"></div>
    <div class="pillar right"></div>

    <div class="street-light light-1"></div>
    <div class="street-light light-2"></div>
    <div class="street-light light-3"></div>
    <div class="street-light light-4"></div>


    <main class="content">

        <header>

            <div class="brand">

                <div class="brand-mark">
                    C
                </div>

                <div>
                    <div class="brand-name">
                        COREACTOR
                    </div>

                    <div class="brand-subtitle">
                        code verification engine
                    </div>
                </div>

            </div>

            <div class="version">
                COREACTOR / 01
            </div>

        </header>


        <section class="hero">

            <div class="eyebrow">

                <span class="eyebrow-dot"></span>

                SYSTEM INITIALIZED

            </div>


            <h1>
                Coreactor
            </h1>


            <p class="hero-description">

                A controlled environment for
                <strong>executing, observing and validating code.</strong>

                Isolation, runtime analysis and access control,
                brought together in one system.

            </p>

        </section>


        <div class="system-line">

            <span class="system-line-label">
                runtime activity
            </span>

        </div>


        <section class="operations">

            <article class="operation">

                <div class="operation-top">

                    <div class="operation-icon">
                        01
                    </div>

                    <span class="status"></span>

                </div>

                <h3>
                    Sandbox
                </h3>

                <p>
                    Isolated execution environment
                    for untrusted code.
                </p>

                <div class="operation-code">
                    docker://isolated
                </div>

            </article>


            <article class="operation">

                <div class="operation-top">

                    <div class="operation-icon">
                        02
                    </div>

                    <span class="status"></span>

                </div>

                <h3>
                    Network
                </h3>

                <p>
                    ${network_status}
                </p>

                <div class="operation-code">
                    network://monitored
                </div>

            </article>


            <article class="operation">

                <div class="operation-top">

                    <div class="operation-icon">
                        03
                    </div>

                    <span class="status"></span>

                </div>

                <h3>
                    File Access
                </h3>

                <p>
                    Track resources accessed during
                    code execution.
                </p>

                <div class="operation-code">
                    fs://restricted
                </div>

            </article>


            <article class="operation">

                <div class="operation-top">

                    <div class="operation-icon">
                        04
                    </div>

                    <span class="status"></span>

                </div>

                <h3>
                    Runtime
                </h3>

                <p>
                    Observe processes, resources
                    and execution behaviour.
                </p>

                <div class="operation-code">
                    runtime://observing
                </div>

            </article>

        </section>


        <footer class="bottom">

            <div class="status-line">

                <span class="online"></span>

                COREACTOR ENGINE
                <span>·</span>
                OPERATIONAL

            </div>

            <div class="bottom-right">

                NODE.JS / DOCKER / C++

            </div>

        </footer>

    </main>

</div>

</body>
</html>
    `);
}

export{
    app,
    port,
    addres
}
