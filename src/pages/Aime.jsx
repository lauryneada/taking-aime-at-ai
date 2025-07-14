import React from "react"
import {Container , Typography, Stack} from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Framework from "../components/Framework";
import BoxedText from "../components/BoxedText";

export default function Aime() {
    return (
        <>
        <Stack direction='row' sx={{padding: 10}}>
            <Container maxWidth='lg' sx={{display: 'flex', flexDirection: 'column',justifyContent: 'start', gap: 3}}>
                <Stack direction="row" alignItems="flex-start" spacing={2}>
                    <Stack spacing={0.5} alignItems="center" justifyContent="center">
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0} sx={{minWidth: '1.2em', textAlign: 'center'}}><span style={{color: ' #DB6463'}}>A</span></Typography>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0} sx={{minWidth: '1.2em', textAlign: 'center'}}><span style={{color: '#4284F3'}}>I</span></Typography>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0} sx={{minWidth: '1.2em', textAlign: 'center'}}><span style={{color: '#6dd040'}}>M</span></Typography>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0} sx={{minWidth: '1.2em', textAlign: 'center'}}><span style={{color: '#FF9900'}}>E</span></Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0}>daptive</Typography>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0}>nclusive</Typography>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0}>ulti-literacy</Typography>
                        <Typography variant='h2' fontSize={75} color='purple.main' margin={0}>thical learner-driven AI in teacher education</Typography>
                    </Stack>
                </Stack>
            </Container>
            <KeyboardDoubleArrowDownIcon sx={{fontSize: '300px', position: 'relative', left: 50, top: 170}}/>
        </Stack>
        <Container sx={{padding: 3}}>
            <Typography variant='h2' sx={{textAlign:'center'}}>AIME Framework</Typography>
            <Typography variant='body1' sx={{textAlign:'center'}}>A research-informed and equity-centered model for embedding AI literacy in teacher education at Wilfrid Laurier University and beyond</Typography>
            <Framework />
        </Container>
        <Container maxWidth='lg' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 20, paddingTop: 0}}>
            <Typography variant='h2' sx={{textAlign: 'center'}}>Three-Phase Implementation Model</Typography>
            <BoxedText 
                text={[<span style={{fontWeight: 700}}>Phase 1</span>, " Awareness and Professional Learning"]}
                hover={true}
                link='/resource-centre'
                more={[
                    'Develop foundational workshops, training modules, and interdisciplinary AI literacy courses tailored for BEd students and faculty.',
                    'Offer professional development sessions on AI’s role in education, ethics, and equity.',
                    'Establish community partnerships with local schools, policymakers, and educational organizations to ensure meaningful AI implementation.',
                    'Introduce AI literacy micro-credentialing opportunities for pre-service teachers.'
                ]}
            />
            <BoxedText 
                text={[<span style={{fontWeight: 700}}>Phase 2</span>, " Apply and Innovate"]}
                hover={false}
                link='/phase2'
                more={[
                    'Embed AI tools and AI-infused lesson design into practicum experiences, allowing teacher candidates to explore AI-powered personalized learning, assessment, and content creation.', 
                    'Develop teacher-led action research projects on AI integration in classrooms, fostering innovation and inquiry-based practice.',
                    'Co-create an AI and Pedagogy Sandbox, where faculty, students, and community stakeholders test and refine AI-driven educational interventions.',
                    'Implement cross-curricular AI integration, ensuring alignment with math, literacy, STEAM, and the arts.'
                ]}
            />
            <BoxedText 
                text={[<span style={{fontWeight: 700}}>Phase 3</span>, " Evaluate, Iterate and Reimagine"]}
                hover={false}
                link='/phase3'
                more={[
                    'Develop a structured evaluation process that continuously assesses AI implementation in teacher education, using learner feedback, faculty input, and community insights.',
                    'Create a sustainable AI learning network within Laurier’s Faculty of Education to ensure ongoing research, development, and ethical integration of AI in teacher preparation.',
                    'Engage in policy advocacy and knowledge mobilization, contributing to national and global discussions on AI in education.',
                    'Support ongoing professional learning and mentorship for graduates as they enter the teaching profession.'
                ]}
            />
        </Container>
        </>
    );
}