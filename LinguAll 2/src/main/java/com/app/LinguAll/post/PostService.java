package com.app.LinguAll.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    private final PostRepository repository;

    @Autowired
    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<PostEntity> getAllPosts() {
        return repository.findAll();
    }

    public PostEntity addPost(PostEntity post) {
        return repository.save(post);
    }

    public void deletePost(Long id) {
        repository.deleteById(id);
    }

    public Optional<PostEntity> getPostById(Long id) {
        return repository.findById(id);
    }

    public PostEntity updatePost(Long id, String newContent) {
        Optional<PostEntity> existingPostOptional = repository.findById(id);

        if (existingPostOptional.isPresent()) {
            PostEntity existingPost = existingPostOptional.get();
            existingPost.setContent(newContent);
            return repository.save(existingPost);
        } else {
            return null;
        }
    }
}

