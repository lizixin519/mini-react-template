/**
 * @description: 创建节点元素方法
 * @param {*} type
 * @param {*} props
 * @param {*} children
 * @return {*}
 */
export default function createElement(type, props, ...children) {
    return {
        type,
        props,
        children,
    };
}
