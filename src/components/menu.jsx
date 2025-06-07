import React, { useState } from 'react';
import '../global.css';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

const initialData = [
  { title: 'Node 1', key: '0-0', children: [{ title: 'SubNode 1-A', key: '0-0-0' }] },
  { title: 'Node 2', key: '0-1', children: [{ title: 'SubNode 2-B', key: '0-0-0' }] },
  { title: 'Node 3', key: '0-2', children: [{ title: 'SubNode 3-C', key: '0-0-0' }] },
  { title: 'Node 4', key: '0-3', children: [{ title: 'SubNode 4-D', key: '0-0-0' }] },
  { title: 'Node 5', key: '0-4', children: [{ title: 'SubNode 5-E', key: '0-0-0' }] },
];

export const Menu = () => {
  const [treeData, setTreeData] = useState(initialData);
  const [selectedNode, setSelectedNode] = useState(null);
  const [newNodeTitle, setNewNodeTitle] = useState('');

  const onSelect = (selectedKeys, info) => {
    setSelectedNode(info.node);
  };

  const addNode = () => {
    if (!selectedNode || !newNodeTitle) return;

    const newNode = {
      title: newNodeTitle,
      key: `${selectedNode.key}-${selectedNode.children ? selectedNode.children.length : 0}`,
    };

    const updatedTreeData = treeData.map(node => {
      if (node.key === selectedNode.key) {
        return { ...node, children: [...(node.children || []), newNode] };
      }
      return node;
    });

    setTreeData(updatedTreeData);
    setNewNodeTitle('');
  };

  const deleteNode = () => {
    if (!selectedNode) return;

    const updatedTreeData = treeData.filter(node => node.key !== selectedNode.key);
    setTreeData(updatedTreeData);
    setSelectedNode(null);
  };

  const onEditNode = (key) => {
    const updatedTreeData = treeData.map(node => {
      if (node.key === key) {
        return { ...node, title: newNodeTitle };
      }
      return node;
    });
    setTreeData(updatedTreeData);
    setNewNodeTitle('');
  };

  return (
    <section className="h-full w-full m-4">
      <h1 className="h-auto w-full text-2xl font-bold flex p-4 justify-center items-center">Menu Builder</h1>
      <Tree
        treeData={treeData}
        onSelect={onSelect}
        selectable
        defaultExpandAll
      />
      <div className="mt-4">
        <input
          type="text"
          value={newNodeTitle}
          onChange={(e) => setNewNodeTitle(e.target.value)}
          placeholder="Node Title"
          className="border p-2 rounded w-full"
        />
        <button onClick={addNode} className="bg-blue-600 text-white p-2 rounded mt-2 hover:bg-blue-700 transition-colors duration-300">Add Node</button>
        <button onClick={deleteNode} className="bg-red-600 text-white p-2 rounded mt-2 hover:bg-red-700 transition-colors duration-300">Delete Node</button>
        {selectedNode && (
          <button onClick={() => onEditNode(selectedNode.key)} className="bg-green-600 text-white p-2 rounded mt-2 hover:bg-green-700 transition-colors duration-300">Edit Node</button>
        )}
      </div>
    </section>
  );
};