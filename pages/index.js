import { Inter } from 'next/font/google'
import { useState } from 'react';
import MyProjects from './components/screens/MyProjects';
import IntroXp from './components/screens/IntroXp';
import ContactForm from './components/screens/ContactForm';
import ScrollButton from './components/widgets/ScrollButton';
import Presentation from './components/screens/Presentation';
import Roadmap from './components/screens/sublevel/Roadmap';
import ModalConfirmation from './components/screens/sublevel/ModalConfirmation';
import MainLayout from '../components/layouts/MainLayout.jsx';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showRoadMap, setShowRoadMap] = useState(false);
  const [showProject, setShowProject] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme','dark')
  }, []);

  return (
    <MainLayout>
      <ModalConfirmation showModal={showModal} setStateModal={setShowModal}/>
      <Roadmap showRoadMap={showRoadMap} setShowRoadMap={setShowRoadMap}></Roadmap>
      <IntroXp />
      <Presentation showRoadMap={showRoadMap} setShowRoadMap={setShowRoadMap}/>
      <MyProjects showProject={showProject} setShowProject={setShowProject} />
      <ContactForm showModal={showModal} setShowModal={setShowModal}/>
      <ScrollButton />
    </MainLayout>
  );
}
