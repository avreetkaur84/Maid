import React from 'react'
import './FAQ.css'
import { hitFeatures } from '../../../utils/data'
// import Image from 'next/image'
import { motion } from 'framer-motion'
import { tagVariants, titleVariants } from '../../../utils/animation'

const FAQ = () => {

    const featureVariants = {
        offscreen: {
            scale: 0.5
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.5,
            },
        },
    }

    return (
        <div className="hiw-wrapper bg-white pb-20">
            <div className="container">
                <div className="hiw-container">
                    {/* head */}
                    <div className="hiw-head text-4xl font-bold">
                        <motion.span
                            variants={titleVariants}
                            initial='offscreen'
                            whileInView={"onscreen"}
                            className='title'
                        >
                            Frequently Asked Questions
                        </motion.span>
                        <motion.span
                            variants={tagVariants}
                            initial='offscreen'
                            whileInView={"onscreen"}
                            className='tag'
                        >
                            {/* All you need to know about aoLearn in one place. */}
                        </motion.span>
                    </div>
                    {/* features */}
                    <div className="hiw-features">
                        {
                            hitFeatures.map((feature, i) => (
                                <motion.div
                                    variants={featureVariants}
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    className='hiw-feature'
                                    key={i}>
                                    {/* left side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                type: 'easeIn',
                                                duration: 1,
                                                delay: .7
                                            }
                                        }}
                                        className="detail"
                                    >
                                        <span className='des'>0{i + 1}</span>
                                        <span className='sec-title font-2xl font-bold'>{feature.title}</span>
                                        <span className='text'>{feature.des}</span>
                                    </motion.div>

                                    {/* right side */}
                                    <div className="icon">
                                        <img
                                            src={feature.icon}
                                            width={180}
                                            height={180}
                                            alt='feature'
                                            style={{ translate: "50% 0rem" }}
                                        />
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ