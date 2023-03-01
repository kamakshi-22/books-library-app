import React from 'react'
import { SearchBooks } from '../../components/SearchBooks/SearchBooks'
import { SearchSubjects } from '../../components/SearchSubjects/SearchSubjects'
import './Home.scss'

import fantasy from '../../assets/images/trending/fantasy.png';
import romance from '../../assets/images/trending/romance.jpeg';
import thriller from '../../assets/images/trending/thriller.jpeg';
import horror from '../../assets/images/trending/horror.jpeg';
import memoirs from '../../assets/images/trending/memoirs.jpeg';

export const Home = () => {
    return (
        <div className='home'>
            <div className='trending-section'>
                <div className='trending-title'>Trending Subjects</div>
                <SearchSubjects/>
                <div className='trending-list'>
                    <ul>
                        <li>
                            <img src={fantasy} alt='trending-subject' />
                            <div className='trending-subject-name'>fantasy</div>
                        </li>
                        <li>
                            <img src={thriller} alt='trending-subject' />
                            <div className='trending-subject-name'>thriller</div>
                        </li>
                        <li>
                            <img src={horror} alt='trending-subject' />
                            <div className='trending-subject-name'>horror</div>
                        </li>
                        <li>
                            <img src={romance} alt='trending-subject' />
                            <div className='trending-subject-name'>romance</div>
                        </li>
                        <li>
                            <img src={memoirs} alt='trending-subject' />
                            <div className='trending-subject-name'>memoirs</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='search-section'>
                <div className='search-header'>
                    <SearchBooks/>
                </div>
            </div>

        </div>
    )
}
