"use client"

import { useTranslations } from "next-intl";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { BlueDiv } from "./BlueDiv";
import { AboutSpan } from "./AboutSpan";
import { FormSend } from "./FormSend";

export const EmailForm = () => {
    const t = useTranslations('contact');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [messageWave, setMessageWave] = useState('');
    const [projectStage, setProjectStage] = useState('');
    const [sucessEmail, setSucessEmail] = useState(false);

    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [companyError, setCompanyError] = useState('');
    const [cityError, setCityError] = useState('');
    const [messageWaveError, setMessageWaveError] = useState('');
    const [projectStageError, setProjectStageError] = useState('');

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone: string): boolean {
        const phoneRegex = /^[0-9]+$/;
        return phoneRegex.test(phone);
    }

    function validateName(name: string): boolean {
        // Verifica se o nome contém apenas letras e tem pelo menos 3 caracteres
        const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
        return nameRegex.test(name);
    }

    function validateCity(city: string): boolean {
        // Verifica se o campo não está vazio e contém apenas letras e espaços
        const cityRegex = /^[A-Za-z\s]+$/;
        return cityRegex.test(city.trim());
    }

    function validateCompany(company: string): boolean {
        // Define um regex que permite letras (incluindo acentuadas), números, espaços, hífens, pontos e vírgulas
        const companyRegex = /^[A-Za-zÀ-ÿ0-9\s\-\.\,\~]+$/;
        return company.trim().length <= 30 && companyRegex.test(company.trim());
    }


    function validateForm(): boolean {
        let isValid = true;

        if (!validateName(name)) {
            setNameError(t('name-erro'));
            setName('');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError(t('email-erro'));
            setEmail('');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!phone.trim()) {
            setPhoneError(t('phone-erro'));
            isValid = false;
        } else if (!validatePhone(phone)) {
            setPhoneError(t('phone-erro'));
            setPhone('');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (message.trim().length < 10) {
            setMessageError(t('message-erro'));
            isValid = false;
        } else {
            setMessageError('');
        }

        if (messageWave.trim().length < 10) {
            setMessageWaveError(t('message-erro'));
            isValid = false;
        } else {
            setMessageWaveError('');
        }

        if (!validateCity(city)) {
            setCityError(t('city-erro'));
            setCity('');
            isValid = false;
        } else {
            setCityError('');
        }

        if (!validateCompany(company)) {
            setCompanyError(t('company-erro'));
            setCompany('');
            isValid = false;
        } else {
            setCompanyError('');
        }

        if (!projectStage) {
            setProjectStageError(t('project-stage-erro'));
            isValid = false;
        } else {
            setProjectStageError('');
        }

        return isValid;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            phone: phone,
            company: company,
            city: city,
            project_stage: projectStage,
            message_wave: messageWave
        };

        emailjs.send("service_sehnuts", "template_oi24zff", templateParams, "b8thRCDhLUkpVcbAB")
            .then((response) => {
                setMessage('');
                setEmail('');
                setName('');
                setPhone('');
                setCompany('');
                setCity('');
                setMessageWave('');
                setProjectStage('');
                setSucessEmail(true);
            }, (err) => {
                console.log("Deu erro:", err);
            });
    }

    return (
        <>
            {sucessEmail &&
                <FormSend />
            }


            <BlueDiv firstText={t('h2')} aboutStyle="hidden" />

            <div className='text-bluedark w-full h-full flex justify-center items-center flex-col text-[15px] font-nexa text-justify md:pl-0 md:w-[95%] xl:w-[85%]'>
                <div className="w-full h-full flex justify-start items-center flex-col mt-7 md:items-start">
                    <span className="w-[90%] mb-5 font-nexa text-[15px] md:text-[17px] md:w-[74%] md:mb-7">{t('h3')}</span>

                    <form className="w-full h-full flex justify-center items-center mb-7 flex-col md:items-start md:text-[12px] 
                           md:justify-start lg:text-[15px]" onSubmit={sendEmail}>

                        <div className="w-full h-full flex flex-col md:flex-row">
                            <div className="w-full h-full flex items-start justify-center flex-col space-y-5 md:w-[50%]">
                                <div className="w-full h-full flex items-center flex-col md:items-start">
                                    <span className="text-[14px] md:text-[15px]">{t('name')}</span>
                                    <input type="text"
                                        placeholder={nameError || "Digite seu nome..."}
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        maxLength={100}
                                        className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%]
                                        ${nameError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />
                                </div>

                                <div className="w-full h-full flex flex-col items-center md:items-start">
                                    <span className="text-[14px] md:text-[15px]">{t('email')}</span>
                                    <input type="text"
                                        placeholder={emailError || "Digite seu email..."}
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%] 
                                        ${emailError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />
                                </div>

                                <div className="w-full h-full flex flex-col items-center md:items-start">
                                    <span className="text-[14px] md:text-[15px]">{t('phone')}</span>
                                    <input type="text"
                                        placeholder={phoneError || "Digite seu Telefone..."}
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        maxLength={15}
                                        className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%]
                                        ${phoneError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />
                                </div>

                                <div className="w-full h-full flex items-center flex-col md:items-start">
                                    <span className="text-[14px] md:text-[15px]">{t('company')}</span>
                                    <input type="text"
                                        placeholder={companyError || "Digite nome da empresa..."}
                                        onChange={(e) => setCompany(e.target.value)}
                                        value={company}
                                        maxLength={100}
                                        className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%]
                                        ${companyError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />
                                </div>

                                <div className="w-full h-full flex items-center flex-col md:items-start">
                                    <span className="text-[14px] md:text-[15px]">{t('city')}</span>
                                    <input type="text"
                                        placeholder={cityError || "Digite a cidade..."}
                                        onChange={(e) => setCity(e.target.value)}
                                        value={city}
                                        maxLength={40}
                                        className={`w-[90%] h-[36px] bg-[#6FC7DA]/50 rounded-lg md:w-[70%]
                                        ${cityError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />
                                </div>

                            </div>

                            <div className="w-full h-full mt-7 flex justify-center items-center md:mt-0 md:w-[50%]">

                                <div className="w-full h-full flex justify-start items-center flex-col md:items-start">
                                    <div className="w-full h-full flex items-center flex-col mb-7 md:mb-0 md:items-start">
                                        <span className="text-[14px] mb-2 md:text-[15px]">{t('project-stage')}</span>
                                        <div className="flex justify-center flex-col items-start w-[80%] md:grid md:gap-2 md:justify-items-start md:grid-cols-2">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    value="idea"
                                                    checked={projectStage === 'idea'}
                                                    onChange={(e) => setProjectStage(e.target.value)}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span>{t('project-stage-idea')}</span>
                                            </label>

                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    value="intermediate"
                                                    checked={projectStage === 'intermediate'}
                                                    onChange={(e) => setProjectStage(e.target.value)}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span>{t('project-stage-intermediate')}</span>
                                            </label>

                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    value="initial"
                                                    checked={projectStage === 'initial'}
                                                    onChange={(e) => setProjectStage(e.target.value)}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span>{t('project-stage-initial')}</span>
                                            </label>

                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    value="advanced"
                                                    checked={projectStage === 'advanced'}
                                                    onChange={(e) => setProjectStage(e.target.value)}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span>{t('project-stage-advanced')}</span>
                                            </label>
                                        </div>
                                        {projectStageError && <p className="text-red-600 text-[14px] md:mb-2">{projectStageError}</p>}
                                    </div>

                                    <span className="text-[14px] mb-2 md:text-[15px] md:mt-7">{t('detail')}</span>
                                    <textarea
                                        placeholder={messageError || "Digite sua mensagem..."}
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        maxLength={500}
                                        className={`w-[90%] h-[76px] bg-[#6FC7DA]/50 rounded-lg mb-7 2xl:w-[70%]
                                        ${messageError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />

                                    <span className="text-[14px] mb-2 md:text-[15px]">{t('wave')}</span>
                                    <textarea
                                        placeholder={messageWaveError || "Digite sua mensagem..."}
                                        onChange={(e) => setMessageWave(e.target.value)}
                                        value={messageWave}
                                        maxLength={500}
                                        className={`w-[90%] h-[76px] bg-[#6FC7DA]/50 rounded-lg 2xl:w-[70%]
                                        ${messageWaveError ? 'placeholder-red-600' : 'placeholder-[#6FC7DA]/0'}`}
                                    />

                                </div>

                            </div>
                        </div>


                        <div className="w-full h-full flex justify-center items-center mt-7">
                            <button type="submit" className="mt-4 font-conthrax text-[12px] bg-bluedark text-white px-3 rounded-lg uppercase">{t('send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
