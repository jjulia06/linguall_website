package com.app.LinguAll.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public List<PostEntity> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public PostEntity addPost(@RequestBody PostEntity post) {
        return postService.addPost(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostEntity> updatePost(@PathVariable Long id, @RequestBody PostEntity updatedPost) {
        Optional<PostEntity> existingPostOptional = postService.getPostById(id);

        if (existingPostOptional.isPresent()) {
            PostEntity existingPost = existingPostOptional.get();
            existingPost.setContent(updatedPost.getContent());

            PostEntity updatedPostEntity = postService.updatePost(existingPost.getId(), updatedPost.getContent());
            return ResponseEntity.ok(updatedPostEntity);
        } else {
            return ResponseEntity.notFound().build();
    }

}}
