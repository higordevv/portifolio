import './about-style.css'
import './media.css'
import React, { useState, useEffect } from 'react'

import git from "./../../imgs/icons/git.png";
import linux from "./../../imgs/icons/linux.png";
import pitao from "./../../imgs/icons/pitao.png";
import shell from "./../../imgs/icons/gnu-bash.png";
import typescript from "./../../imgs/icons/typescript.png";

import html from './../../imgs/icons/html-5.png'
import js from './../../imgs/icons/js.png'
import css from './../../imgs/icons/css-3.png'
import react from './../../imgs/icons/atom.png'

import useSWR from 'swr'


const AboutArea = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    function Profile(...args) {
        const { data, error } = useSWR(args , fetcher)

        if (error) return <div>falhou ao carregar</div>
        if (!data) return <div>carregando...</div>

        // rednerizar dados
        return data
    }

    const Avatar = Profile('https://api.github.com/users/HigorDevJ')

    return (
        <div id="about" className='aboutme'>
            <h1>About me</h1>
            <div className='text-about'>
                <div className='infor_me'>
                <img src={Avatar.avatar_url} className='profile' />
                <p>
                    I am a 17 year old Brazilian programmer, currently living in Botucatu, São Paulo, I have knowledge of Web Development with Html, css and JavaScript in addition to Frameworks such as React.Js
                </p>

                </div>
                <table className='Tec-additional'>
                    <tr>
                        <th>Additional knowledge:</th>
                    </tr>
                    <tr>
                        <td><img src={pitao} alt="" /><p>Python</p> </td>
                    </tr>
                    <tr>
                        <td><img src={linux} alt="" /><p>Linux</p></td>
                    </tr>
                    <tr>
                        <td><img src={typescript} alt="" />
                            <p>TypeScript</p> </td>
                    </tr>
                    <tr>
                        <td><img src={git} alt="" /><p>Git</p></td>
                    </tr>
                    <tr>
                        <td>
                            <img src={shell} alt="" />
                            <p> ShellScript</p></td>
                    </tr>

                </table>

            </div>
        </div>
    );
}

export default AboutArea;