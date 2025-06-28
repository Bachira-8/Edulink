import React, { useState } from "react";
import "./MaterialsPage.css";

function MaterialsPage() {
  // Dummy data - replace with real data from your backend
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "Basic concepts and fundamentals",
      fileName: "intro_cs.pdf",
      fileSize: "2.5 MB",
      uploadedBy: "Dr. Smith",
      uploadDate: "2024-01-15",
      fileType: "pdf"
    },
    {
      id: 2,
      title: "Advanced Mathematics Notes",
      description: "Calculus and linear algebra materials",
      fileName: "math_notes.docx",
      fileSize: "1.8 MB",
      uploadedBy: "Prof. Johnson",
      uploadDate: "2024-01-10",
      fileType: "docx"
    },
    {
      id: 3,
      title: "Programming Assignment 1",
      description: "Python programming exercises",
      fileName: "assignment1.pdf",
      fileSize: "500 KB",
      uploadedBy: "Dr. Smith",
      uploadDate: "2024-01-12",
      fileType: "pdf"
    }
  ]);

  // Dummy user role - replace with actual user authentication
  const [userRole, setUserRole] = useState("faculty"); // or "student"
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState(null);

  // Form state for upload/edit
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMaterial) {
      // Update existing material
      setMaterials(materials.map(material => 
        material.id === editingMaterial.id 
          ? { ...material, ...formData, fileName: formData.file?.name || material.fileName }
          : material
      ));
      setEditingMaterial(null);
    } else {
      // Add new material
      const newMaterial = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        fileName: formData.file?.name || "No file",
        fileSize: formData.file ? `${(formData.file.size / 1024 / 1024).toFixed(1)} MB` : "0 MB",
        uploadedBy: "Current User",
        uploadDate: new Date().toISOString().split('T')[0],
        fileType: formData.file?.name.split('.').pop() || "unknown"
      };
      setMaterials([...materials, newMaterial]);
    }
    setFormData({ title: "", description: "", file: null });
    setShowUploadForm(false);
  };

  const handleEdit = (material) => {
    setEditingMaterial(material);
    setFormData({
      title: material.title,
      description: material.description,
      file: null
    });
    setShowUploadForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      setMaterials(materials.filter(material => material.id !== id));
    }
  };

  const handleDownload = (material) => {
    // Create a dummy download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob(['Dummy file content'], { type: 'text/plain' }));
    link.download = material.fileName;
    link.click();
  };

  const getFileIcon = (fileType) => {
    switch (fileType.toLowerCase()) {
      case 'pdf': return '';
      case 'docx': return '';
      case 'pptx': return '📊';
      case 'jpg':
      case 'jpeg':
      case 'png': return '🖼️';
      default: return '📁';
    }
  };

  return (
    <div className="materials-page">
      <div className="materials-container">
        <div className="materials-header">
          <h1>Course Materials</h1>
          {userRole === "faculty" && (
            <button 
              onClick={() => setShowUploadForm(true)}
              className="upload-btn"
            >
              + Upload Material
            </button>
          )}
        </div>

        {/* Upload/Edit Form */}
        {showUploadForm && (
          <div className="upload-form-overlay">
            <div className="upload-form">
              <h2>{editingMaterial ? "Edit Material" : "Upload New Material"}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>File</label>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.docx,.pptx,.jpg,.jpeg,.png"
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    {editingMaterial ? "Update" : "Upload"}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      setShowUploadForm(false);
                      setEditingMaterial(null);
                      setFormData({ title: "", description: "", file: null });
                    }}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Materials List */}
        <div className="materials-grid">
          {materials.map((material) => (
            <div key={material.id} className="material-card">
              <div className="material-icon">
                {getFileIcon(material.fileType)}
              </div>
              <div className="material-info">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <div className="material-meta">
                  <span> {material.fileName}</span>
                  <span> {material.fileSize}</span>
                  <span> {material.uploadedBy}</span>
                  <span>📅 {material.uploadDate}</span>
                </div>
              </div>
              <div className="material-actions">
                {userRole === "faculty" ? (
                  <>
                    <button 
                      onClick={() => handleEdit(material)}
                      className="action-btn edit-btn"
                    >
                      ✏️ Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(material.id)}
                      className="action-btn delete-btn"
                    >
                      🗑️ Delete
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleDownload(material)}
                    className="action-btn download-btn"
                  >
                    ⬇️ Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Role Toggle (for demo purposes) */}
        <div className="role-toggle">
          <label>
            <input
              type="checkbox"
              checked={userRole === "student"}
              onChange={(e) => setUserRole(e.target.checked ? "student" : "faculty")}
            />
            Switch to Student View
          </label>
        </div>
      </div>
    </div>
  );
}

export default MaterialsPage;