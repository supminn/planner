import React from 'react'
import Button from '../../components/Button';
import { useWebContext } from '../../components/Context/WebContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Divider, Tooltip } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Card = ({ name, image, skills, summary, about, socialLinks }) => {
    AOS.init();
    const { theme } = useWebContext();
    const icons = [<TwitterIcon />, <LinkedInIcon />, <GitHubIcon />, <MailIcon />];
    const socials = ['Twitter', 'LinkedIn', 'GitHub', 'E-Mail'];
    return (
        <div className="card" data-aos="flip-left">
            <div className="card-box">
                <div className="card-head">
                    <div className="card-head-image">
                        <img className="card-head-image__img" src={image} alt={name} />
                    </div>
                    <div className="card-head-content">
                        <div className="card-head-content__name">{name}</div>
                        <div className="card-head-content__subtitle">
                            <div className="card-head-content__summary">{summary}</div>
                            <div className="card-head-content__about">{about}</div>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="card-skills">
                    {
                        skills.map((skill, index) => (
                            <Button
                                key={index}
                                className="card-skills__skill icon-btn-sm"
                                text={skill}
                                variant={theme === "light" ? "outline" : "fill"}
                                color="blue"
                                size="small"
                            />
                        ))
                    }
                </div>
                <Divider />
                <div className="card-social">
                    <div className="card-social-row">
                        {
                            socialLinks.map((link, index) => (
                                <div key={index} className="card-social-links">
                                    <a href={index === 3 ? "mailto:" + link : link} className="card-social-link icon-btn">
                                        <Tooltip title={socials[index]}>
                                            {
                                                icons[index]
                                            }
                                        </Tooltip>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
