import React from 'react'
import Image from 'next/image'
import jsLogo from '../../public/js.webp'
import HtmlLogo from '../../public/html5-logo-31813.png'
import cssLogo from '../../public/cssLogo.png'
import bootstrapLogo from '../../public/Bootstrap-New.png'
import tailwindLogo from '../../public/tailwind.webp'
import muiLogo from '../../public/mui.webp'
import chakraLogo from '../../public/chakra.webp'
import reactLogo from '../../public/react.webp'
import reactRouterLogo from '../../public/router.webp'
import gitLogo from '../../public/git.webp'
import postmanLogo from '../../public/postman.webp'
import mysqlLogo from '../../public/mysql.webp'
import expressLogo from '../../public/express.webp'
import reduxLogo from '../../public/redux.webp'
import nextLogo from '../../public/next.webp'
import antD from '../../public/antd.webp'
import semanticUI from '../../public/semantic.webp'
import photoshop from '../../public/ps.png'
import figma from '../../public/figma.png'
import node from '../../public/node.png'
import styledComponent from '../../public/styled.webp'
import daisyUI from '../../public/daisyui.png'
import mongoLogo from '../../public/mongo.png'
import SkillsCard from './SkillsCard'

const SkillsSections = () => {
  return (
    <>
<div className="bg-backgroundFirst py-10 flex text-center justify-center" id='skills'>
<div className=''>
<p className='text-center text-3xl font-bold'>SKILLS</p>
<h5 className='mt-3  mb-4'><p className='border-b-2  border-b-reactColor w-min mx-auto'>Frontend</p></h5>
<div className='flex justify-center'>
<SkillsCard logoSrc={HtmlLogo} altText="Logo of HTML" title="HTML" />
<SkillsCard logoSrc={cssLogo} altText="Logo of css" title="CSS" />
<SkillsCard logoSrc={jsLogo} altText="Logo of Javascript" title="Javascript" />
<SkillsCard logoSrc={reactLogo} altText="Logo of react" title="ReactJS" />
<SkillsCard logoSrc={reactRouterLogo} altText="Logo of react router" title="React-Router" />
<SkillsCard logoSrc={reduxLogo} altText="Logo of redux" title="Redux" />
<SkillsCard logoSrc={nextLogo} altText="Logo of next js" title="NextJS" />

</div>
<h5 className='mt-5 mb-4'><p className='border-b-2  border-b-reactColor w-min mx-auto text-nowrap'>UI Libraries</p></h5>
<div className='flex justify-center'>
<SkillsCard logoSrc={bootstrapLogo} altText="Logo of Bootstrap" title="Bootstrap" />
<SkillsCard logoSrc={tailwindLogo} altText="Logo of css" title="Tailwind" />
<SkillsCard logoSrc={muiLogo} altText="Logo of Material ui" title="MaterialUI" />
<SkillsCard logoSrc={chakraLogo} altText="Logo of chakra ui" title="ChakraUI" />
<SkillsCard logoSrc={antD} altText="Logo of Ant Design" title="Ant Design" />
<SkillsCard logoSrc={semanticUI} altText="Logo of semantic ui" title="Semantic UI" />
<SkillsCard logoSrc={styledComponent} altText="Logo of styled components" title="Styled Components" />
<SkillsCard logoSrc={daisyUI} altText="Logo of daisy ui" title="DaisyUI" />

</div>
<h5 className='mt-5  mb-4'><p className='border-b-2  border-b-reactColor w-min mx-auto text-nowrap'>Other Tools</p></h5>
<div className='flex justify-center'>
<SkillsCard logoSrc={gitLogo} altText="Logo of git" title="Git" />
<SkillsCard logoSrc={postmanLogo} altText="Logo of postman" title="Postman" />
<SkillsCard logoSrc={figma} altText="Logo of figma" title="Figma" />
<SkillsCard logoSrc={photoshop} altText="Logo of photoshop" title="Photoshop" />
</div>
<h5 className='mt-5 mb-4'><p className='border-b-2  border-b-reactColor w-min mx-auto'>Familiar</p></h5>
<div className='flex justify-center'>

<SkillsCard logoSrc={node} altText="Logo of node js" title="NodeJS" />
<SkillsCard logoSrc={expressLogo} altText="Logo of expressjs" title="Express" />
<SkillsCard logoSrc={mongoLogo} altText="Logo of mongoDB" title="MongoDB" />
<SkillsCard logoSrc={mysqlLogo} altText="Logo of mysql" title="MySQL" />

</div>
</div>
</div>

    </>
  )
}

export default SkillsSections