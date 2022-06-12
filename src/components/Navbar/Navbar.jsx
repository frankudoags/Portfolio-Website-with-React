import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {BsBook} from 'react-icons/bs'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav> 
      <a href="#"  onClick={() =>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><BsPersonFill /></a>
      <a href="#experience"  onClick={() =>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BsBook /></a>
      <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><BsFillBookmarkStarFill /></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navbar