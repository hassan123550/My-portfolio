// import React from 'react';
// import PropTypes from 'prop-types';

// const ButtonPrimary = ({
//   href,
//   target = '_self',
//   label,
//   icon,
//   classes = ''
// }) => {
//   const baseClasses =
//     'inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ' +
//     'bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 ' +
//     classes;

//   const iconSpan = icon ? (
//     <span className="material-symbols-rounded text-xl" aria-hidden="true">
//       {icon}
//     </span>
//   ) : null;

//   const content = (
//     <>
//       {label}
//       {iconSpan}
//     </>
//   );

//   return href ? (
//     <a href={href} target={target} className={baseClasses}>
//       {content}
//     </a>
//   ) : (
//     <button className={baseClasses}>{content}</button>
//   );
// };

// ButtonPrimary.propTypes = {
//   label: PropTypes.string.isRequired,
//   href: PropTypes.string,
//   target: PropTypes.string,
//   icon: PropTypes.string,
//   classes: PropTypes.string
// };

// export { ButtonPrimary };









// // import React from 'react';
// // import PropTypes from 'prop-types';
// // const ButtonPrimary = ({
// //     href,
// //     target='_self',
// //     label,
// //     icon,
// //     classes
// // }) => {

// //     if (href) {
// // return (
// // <a 
// // href={href}
// // target={target}
// // className={"btn btn-primary " + classes}
// // >
// // {label}

// // {icon ? 
// // <span className='material-symbols-rounded'
// // area-hidden = "true">
// //     {icon}
// // </span>
// // :undefined
// // }
// // </a>
// // )
// //     }
// //     else {
// //         return (
// // <button className={"btn btn-outline " + classes}>
// //     {label}

// //     {icon ? 
// // <span className='material-symbols-rounded'
// // area-hidden = "true">
// //     {icon}
// // </span>
// // :undefined
// // }
// // </button>
// //         )
// //     }

// // };
// // ButtonPrimary.propTypes = {
// //     label: PropTypes.string.isRequired,
// //     href: PropTypes.string,
// //     target:PropTypes.string,
// //     icon:PropTypes.string,
// //     classes: PropTypes.string
// // }
// // export {
// //     ButtonPrimary
// // }  








import React from 'react';
import PropTypes from 'prop-types';


const ButtonPrimary = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {

    if (href) {
return (
<a 
href={href}
target={target}
className={"btn btn-primary " + classes}
>
{label}

{icon ? 
<span className='material-symbols-rounded'
area-hidden = "true">
    {icon}
</span>
:undefined
}
</a>
)
    }
    else {
        return (
<button className={"btn btn-primary " + classes}>
    {label}

    {icon ? 
<span className='material-symbols-rounded'
area-hidden = "true">
    {icon}
</span>
:undefined
}
</button>
        )
    }

};
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes: PropTypes.string
}


const ButtonOutline = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {

    if (href) {
return (
<a 
href={href}
target={target}
className={"btn btn-outline " + classes}
>
{label}

{icon ? 
<span className='material-symbols-outlined'
area-hidden = "true">
    {icon}
</span>
:undefined
}
</a>
)
    }
    else {
        return (
<button className={"btn btn-outline " + classes}>
    {label}

    {icon ? 
<span className='material-symbols-outlined'
area-hidden = "true">
    {icon}
</span>
:undefined
}
</button>
        )
    }

};
ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes: PropTypes.string
}



export {
    ButtonPrimary,
    ButtonOutline
}